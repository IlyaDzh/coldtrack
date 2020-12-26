import {connectMetamask, ensureMetamask, requestAccount, uploadFile, 
  downloadFile, getFiles} from './index.js'
import {settings, settingsPromise} from './api.js'
import {getAccount} from './eth.js'

const $ = document.querySelector.bind(document)

function esc(text){
  const textnode = document.createTextNode(text)
  const el = document.createElement('p')
  el.appendChild(textnode)
  return el.innerHTML
}

function initUploadArea(){
  $('#drop-area').addEventListener('drop', onFileDrop)
  $('#drop-area').addEventListener('dragover', onFileDragOver) 
  $('#file-input').addEventListener('change', e => {
    const file = e.target.files[0]
    upload(file)
  })
  // TODO paste event?

  function onFileDragOver(e){
    e.preventDefault()
  }

  function onFileDrop(e){
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if(file == null){
      return
    }
    upload(file)
  }

  function onUploadProgress(fraction){
    const percent = Math.floor(fraction*100) + '%'
    $('#progress-bar').style = 'width: ' + percent
    $('#timer').innerText = percent
  }

  async function upload(file){
    ensureMetamask()
    uploadFile(file, {onUploadProgress})
  }
}

export async function initWalletUI(){
  $('[name="select-wallet"][value="MetaMask"]').addEventListener('change', async () => {
    try {
      const acc = await requestAccount()
      if(PAGE_STATE != 'demo'){
        window.location.replace('/demo')
        return
      }
      await connectMetamask(acc)
      Modal.hideModal()
    } finally {
      document.querySelectorAll(['[name=select-wallet]']).forEach(el => 
        el.checked = false
      )
    }
  })
}

export async function initDemoUI(){
  initUploadArea()
}

function formatSize(size){
  return new BigNumber(size).shiftedBy(-9)/*GB*/.toFixed(3,BigNumber.ROUND_UP) + ' Gb'
}

export async function renderFiles(files){
  // TODO spinner
  function row(file) {
    return `
			<tr>
				<td aria-label="ID">
					<div class="demo-table__btns">
						<button type="button" class="button demo-table__modal" data-id="${file.id}">
              ${file.id}
						</button>
						<button type="button" class="button demo-table__open">
							<svg width="10" height="6" viewBox="0 0 10 6">
								<path d="M8.1.86a.7.7 0 01.98 0c.28.27.28.7 0 .97L5.14 5.66a.7.7 0 01-1 0L.2 1.83a.68.68 0 010-.97.7.7 0 011 0L4.64 4 8.1.86z"/>
							</svg>
						</button>
					</div>
				</td>
				<td aria-label="File Name">
					${esc(file.filename)}
				</td>
				<td aria-label="Date">
					${file.creation_time}
				</td>
				<td aria-label="Size">
					${formatSize(file.size)}
				</td>
			</tr>
    `
  }
  let html = ''
  for(const file of files){
    html += row(file)
  }
  $('#files').innerHTML = html
  $('#files').addEventListener('click', e => {
    const id = e.target.dataset.id
    if(id != null){
      showFileDetails(id)
    }
  })
}

function getPrice(size){
  const PRICE_PER_MONTH_PER_TB = 2.4
  const DECIMAL_POINTS = 7
  const str = new BigNumber(size)
    .times(PRICE_PER_MONTH_PER_TB)
    .div(new BigNumber(10).pow(12))
    .toFixed(7,BigNumber.ROUND_UP)
  return '$' + str
}

function showFileDetails(id){
  const file = getFiles().find(file => file.id == id)
  $('#file-details-id').innerText = file.id
  $('#file-details-name').innerText = file.filename
  $('#file-details-size').innerText = formatSize(file.size)
  $('#file-details-creation-time').innerText = file.creation_time
  $('#file-details-price-per-month').innerText = getPrice(file.size)
  $('#file-details-owner').innerText = file.owner
  $('#file-details-txhash').innerText = file.txhash
  $('#file-details-txhash').href = 'https://rinkeby.etherscan.io/tx/' + file.txhash

  const isOwner = getAccount().toLowerCase() == file.owner.toLowerCase()

  $('#not_an_owner').style.display = isOwner ? 'none' : 'block'

  $('#download').onclick = async e => {
    e.preventDefault()
    ensureMetamask()
    if(isOwner){
      Modal.modalShow('waiting', 'Waiting for confirmation')
      await downloadFile(id)
      Modal.hideModal()
    } else {
      Modal.modalShow('failed', 'You are not an owner of this file')
    }
  }
  Modal.modalShow('file-details')
}

export function renderAccount(account){
  const ACC_LENGTH = 42
  //format like 0x0659...71FA
  const acc_str = account.slice(0, 6) + '...' + account.slice(ACC_LENGTH - 4, ACC_LENGTH)
  $('#account').innerText = acc_str
}

export function renderBalance(balance){
  $('#header').classList.add('in-logged')
  $('#header_logged_in').style.display = 'block'
  $('#header_logged_out').style.display = 'none'
  settingsPromise.then(() => {
    const balance_str = balance
      .shiftedBy(-settings.cls_token_decimals)
      .toFixed(5,BigNumber.ROUND_DOWN)
    $('#balance').innerText = balance_str
  })
}