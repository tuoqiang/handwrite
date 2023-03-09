function parseUrlParams(href) {
    const res = {}
    const sepIndex = href.indexOf('?')
    if (sepIndex > 0) {
        const paramsStr = href.substring(sepIndex + 1)
        console.log(paramsStr)
        const arr = paramsStr.split('&')
        arr.forEach((item) => {
            const [key, val] = item.split('=')
            res[key] = val
        })
        console.log(arr)
    } else {
        console.log('没有参数可以转化')
    }
    return res
}

const href = 'https://juejin.cn/post/6950554221242499103?a=1&b=2'
const res = parseUrlParams(href)
console.log(res)
