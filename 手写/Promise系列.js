Promise.all = function (iterator) {
    return new Promise((resolve, reject) => {
        if (iterator.length === 0 || !iterator) {
            resolve([])
        } else {
            let count = 0
            let result = []
            const len = iterator.length
            for (let i = 0; i < len; i++) {
                Promise.resolve(iterator[i]).then(
                    (data) => {
                        result[i] = data
                        count = count + 1
                        if (count === len) {
                            resolve(result)
                        }
                    },
                    (err) => {
                        reject(err)
                        return
                    }
                )
            }
        }
    })
}

Promise.allSettled = function (iterator) {
    return new Promise((resolve, reject) => {
        if (iterator.length === 0 || !iterator) {
            resolve([])
        }
        let len = iterator.length
        let count = 0
        let result = []
        for (let i = 0; i < len; i++) {
            Promise.resolve(iterator[i]).then(
                (res) => {
                    count = count + 1
                    result[i] = {
                        status: 'fullfilled',
                        values: res,
                    }
                    if (count === len) {
                        resolve(result)
                    }
                },
                (e) => {
                    count = count + 1
                    result[i] = {
                        status: 'rejected',
                        values: e,
                    }
                    if (count === len) {
                        resolve(result)
                    }
                }
            )
        }
    })
}

Promise.race = function (iterator) {
    return new Promise((resolve, reject) => {
        for (let iter of iterator) {
            Promise.resolve(iter)
                .then((res) => {
                    resolve(res)
                })
                .catch((e) => {
                    reject(e)
                })
        }
    })
}

Promise.any = function (list) {
    return new Promise((resolve, reject) => {
        if (list.length === 0 || !list) {
            return resolve([])
        }
        let count = 0
        let length = list.length
        let res = []
        for (let i = 0; i < length; i++) {
            Promise.resolve(list[i]).then(
                (data) => {
                    resolve(data)
                },
                (e) => {
                    count++
                    res[i] = e
                    if (count === length) {
                        reject(new AggregateError(res))
                    }
                }
            )
        }
    })
}

Promise.resolve = function (value) {
    if (value instanceof Promise) {
        return value
    }
    return new Promise((resolve) => {
        resolve(value)
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}
