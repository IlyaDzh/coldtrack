import * as ui from './ui.js'
import * as eth from './eth.js'
import * as api from './api.js'

let files

class MetamaskError extends Error {}

window.addEventListener('unhandledrejection', function(event) {
  const message = 'Error: ' + event.reason.message || event.reason
  Modal.modalShow('failed', message)
});

window.addEventListener('load', () => {
  api.settingsPromise.then(ui.initWalletUI)
})

if(PAGE_STATE=='demo'){
  window.addEventListener('load', () => {
    fetchAndRenderFiles()
    api.settingsPromise.then(ui.initDemoUI)
  })
}

const onMetamaskConnect = new Promise((resolve) => {

  function handle(){
    if(window.ethereum && window.ethereum.isConnected()){
      resolve()
    } else {
      if(window.ethereum){
        window.ethereum.on('connect', resolve)
      }
    }
  }

  if(window.ethereum){
    handle()
  } else {
    window.addEventListener('load', () => {
      handle()
    })
  }

})

Promise.all([onMetamaskConnect, api.settingsPromise]).then(async () => {
  try {
    await connectMetamask()
  }catch(e){
    if(e instanceof MetamaskError){
      // Could not connect to Metamask on startup, don't show errors and let user 
      // connect manually
      console.log('could not connect to metamask, do nothing', e)
    } else {
      throw e
    }
  }
})


function ensureRinkebyNetwork(){
  if(parseInt(ethereum.chainId) != api.settings.chain_id){
    throw new MetamaskError('Please select Rinkeby Test Network')
  }
}

export function ensureMetamask(){
  if(!window.ethereum){
    throw new MetamaskError('Please install and enable Metamask')
  }
  ensureRinkebyNetwork()
}

export function ensureWalletConnected(){
  ensureMetamask()
  if(eth.getAccount() == null){
    throw new MetamaskError('Please connect wallet')
  }
}

async function fetchAndRenderFiles(){
  files = await api.fetchFiles()
  ui.renderFiles(files)
}

export function getFiles(){
  return files
}

export async function requestAccount(){
  ensureMetamask()
  let acc
  try {
    [acc] = await ethereum.request({method: 'eth_requestAccounts'})
  } catch(e) {
    if(e.code == -32002){
      e.message = 'Account request is already pending'
    } else {
      e.message = 'Could not connect to wallet: ' + e.message
    }
    throw e
  }
  return acc
}

export async function connectMetamask(acc){
  ensureMetamask()
  
  if(acc == null){
    acc = await requestAccount()
  }


  ethereum.on('chainChanged', (_chainId) => window.location.reload());

  eth.setAccount(acc)

  ui.renderAccount(acc)

  eth.initWeb3()

  console.log('get token balance')
  const balance = BigNumber(await eth.getTokenBalance(acc))
  console.log('balance', balance.toFixed())
  ui.renderBalance(balance)

  // TODO check if balance is close to zero as well as ether balance
  if(balance.isZero()){
    try {
      // TODO show message that we deposit balance?
      await api.requestToken(acc)
    } catch(e){
      e.message = 'Could not deposit token: ' + e.message
      throw e
    }
  }

  setInterval(async () => {
    const balance = BigNumber(await eth.getTokenBalance(acc))
    ui.renderBalance(balance)
  }, 5000)
}


export async function uploadFile(file, {onUploadProgress}){
  ensureWalletConnected()
  Modal.modalShow('waiting', 'Connecting to server')
  const {id, secret} = await api.requestUpload()
  const receipt = await eth.payForUpload({id, size: file.size, filename: file.name})
  console.log('uploadReceipt', receipt)
  document.body.classList.add('uploading')
  document.querySelector('.demo-form').classList.add('is-uploading')
  onUploadProgress(0)
  try {
    await api.upload({id, secret, blockNumber: receipt.blockNumber, file}, {
      onProgress: onUploadProgress
    })
  } finally {
    document.body.classList.remove('uploading')
    document.querySelector('.demo-form').classList.remove('is-uploading')
  }
  await fetchAndRenderFiles()
}

export async function downloadFile(id){
  ensureWalletConnected()
  const signature = await eth.signDownloadRequest(id)
  const {nonce} = await api.request_download({id, signature})
  api.download_file(nonce)
}
