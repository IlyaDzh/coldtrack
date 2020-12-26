import {ERC20_ABI, FileRegistry_ABI} from './abi.js'
import {settings} from './api.js'

let account

let myWeb3;

export function initWeb3(){
  myWeb3 = new Web3(window.ethereum)
}

export function setAccount(acc){
  account = acc
}

export function getAccount(){
  return account
}

export async function getTokenBalance(address){
  // TODO remove
  //console.log('getting ether balance')
  //const etherB = await getEtherBalance(address)
  //console.log('etherB', etherB)
  const token = new myWeb3.eth.Contract(ERC20_ABI, settings.cls_token_address)
  return token.methods.balanceOf(address).call()
}

export async function getEtherBalance(address){
  return myWeb3.eth.getBalance(address)
}

export async function payForUpload({id, size, filename}){
  const token = new myWeb3.eth.Contract(ERC20_ABI, settings.cls_token_address)
  const registry = new myWeb3.eth.Contract(FileRegistry_ABI, settings.file_registry_address)
  const price_per_gb_month = new BigNumber(await registry.methods.price_per_gb_month().call())
  console.log('price_per_gb_month', price_per_gb_month.toString())

  const price = price_per_gb_month
    .times(size)
    .div(new BigNumber(1).shiftedBy(9) /* bytes in gb */)
    .toString()
  console.log('approving')

  Modal.modalShow('waiting', 'Waiting for confirmation')
  const approveReceipt = await new Promise((resolve, reject) => {
    token.methods.approve(settings.file_registry_address, price).send({from: account})
      // TODO show intermediate messages
      .on('transactionHash', (hash) => {
        const etherscan = `
          <a href='https://rinkeby.etherscan.io/tx/${hash}' target="__blank">
            View on Etherscan
          </a>
        `
        Modal.modalShow('waiting', 'Transaction submitted', etherscan)
      })
      .on('receipt', resolve)
      .on('error', reject)
  })
  // TODO check approval logs
  console.log('approveReceipt', approveReceipt)

  Modal.modalShow('waiting', 'Waiting for confirmation')
  const uploadReceipt = await new Promise((resolve, reject) => {
    registry.methods.upload('0x' + id, filename, size)
      .send({from: account})
      // TODO show intermediate messages
      .on('transactionHash', (hash) => {
        const etherscan = `
          <a href='https://rinkeby.etherscan.io/tx/${hash}' target="__blank">
            View on Etherscan
          </a>
        `
        Modal.modalShow('waiting', 'Transaction submitted', etherscan)
      })
      .on('receipt', resolve)
      .on('error', reject)
  })
  // TODO check upload logs
  console.log('uploadReceipt', uploadReceipt)

  Modal.hideModal()

  return uploadReceipt
}

export async function signDownloadRequest(id){
  // TODO error
  const params = [account, settings.message_to_sign + id];
  return ethereum.request({method: 'personal_sign', params})
}
