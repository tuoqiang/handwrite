function Jsonp({ url, params, callback }) {
    function _getSrc() {
        let srcStr = ''
        for (let key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                srcStr += `${key}=${params[key]}&`
            }
        }
        srcStr += `${url}?${srcStr}callback=${callback}`
        return srcStr
    }
    return new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script')
        scriptElement.src = _getSrc()
        document.appendChild(scriptElement)
        window[callback] = function (data) {
            resolve(data)
            document.removeChild(scriptElement)
        }
    })
}
