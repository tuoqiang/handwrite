function deepClone(obj) {
    return new Promise((resolve, reject) => {
        try {
            const { port1, port2 } = new MessageChannel()
            port2.onmessage = function (e) {
                resolve(e.data)
            }
            port1.postMessage(obj)
        } catch (e) {
            reject(e)
        }
    })
}

const oldObj = { a: { b: 1 } }
deepClone(oldObj).then((newObj) => {
    console.log(oldObj === newObj) // false
    newObj.a.b = 2
    console.log(oldObj.a.b) // 1
})
