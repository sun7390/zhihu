import {
    baseUrl
} from './variable'

export default async (url, data = {}, type = 'GET') => {
    type = type.toUpperCase()
    url = baseUrl + url

    if (type === 'GET') {
        let dataStr = ''
        if (data === {}) {
            return
        }
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.length - 1)
            url = url + '?' + dataStr
        }
    }

    if (window.fetch) {
        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'reload',
            referrer: 'no-referrer'
        }
        if (type === 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: data // JSON.stringfy(data)
            })
        }

        try {
            const response = await fetch(url, requestConfig)
            const responseJson = await response.json()
            if (responseJson.status === 0) {
                return JSON.parse(responseJson.data)
            }
        } catch (e) {
            throw new Error(e)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj = new XMLHttpRequest()
            let sendData = ''
            if (type === 'POST') {
                sendData = JSON.stringify(data)
            }

            requestObj.open(type, url, true)
			requestObj.setRequestHeader('Content-type', 'application/json')
            requestObj.send(sendData)
            
            requestObj.onreadystatechange = () => {
                if (requestObj.readyState === 4) {
                    if (requestObj.status === 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj)
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}
