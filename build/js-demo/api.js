const BASE_URL = API_PATH == ''
  ? location.protocol + '//api.' + window.location.host + '/'
  : API_PATH

export let settings

// TODO hide app until settings fetched
export const settingsPromise = fetchAPI('settings')
  .then(r => r.json())
  .then(s => settings = s)

async function fetchAPI(path, options){
  // TODO throw for status
  const resp = await fetch(BASE_URL + path, options)
  if(resp.status != 200){
    throw new Error(await resp.text())
  }
  return resp
}

export function requestToken(account){
  return fetchAPI('request_token', {
    method: 'POST', 
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({address: account}),
  })
}

export function fetchFiles(){
  return fetchAPI('files').then(resp => resp.json())
}

export function requestUpload(){
  return fetchAPI('request_upload', {method: 'POST'}).then(r => r.json())
}

export function upload(params, {onProgress} = {}){
  const body = new FormData()
  for(const k in params){
    body.append(k,params[k])
  }

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('POST', BASE_URL + 'upload')

    request.upload.addEventListener('progress', function(e) {
      const fraction_completed = (e.loaded / e.total)
      if(onProgress){
        onProgress(fraction_completed)
      }
    })

    request.addEventListener('load', function(e) {
      if(request.status == 200){
        resolve()
      } else {
        reject(request.response)
      }
    })

    request.send(body)
  })
}

export async function request_download({id, signature}){
  const resp = await fetchAPI('request_download', {
    method: 'POST', 
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({id, signature}),
  })
  return resp.json()
}

export function download_file(nonce){
  location.replace(BASE_URL + 'files/' + nonce)
}
