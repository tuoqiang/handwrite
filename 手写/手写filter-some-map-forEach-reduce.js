Array.prototype.filter = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this id und and null')
    }
    if (typeof this !== 'function') {
        return new TypeError('this id must be a function')
    }
    const O = Object(this)
    const length = O.length >>> 0
    const res = []
    let k = 0
    while (k < length) {
        if (k in O) {
            if (callback.call(thisArg, O[k], k, O)) {
                res.push(O[k])
            }
        }
        k++
    }
    return []
}

Array.prototype.some = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this id und and null')
    }
    if (typeof this !== 'function') {
        return new TypeError('this id must be a function')
    }
    const O = Object(this)
    const length = O.length >>> 0
    const res = []
    let k = 0
    while (k < length) {
        if (k in O) {
            if (callback.call(thisArg, O[k], k, O)) {
                return true
            }
        }
        k++
    }
    return false
}

Array.prototype.map = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is und and null')
    }
    if (typeof callbak !== 'function') {
        throw new TypeError('callbak must be a function')
    }
    const O = Object(this)
    const length = O.length >>> 0
    const res = []
    let k = 0
    while (k < length) {
        if (k in O) {
            res.push(callback.call(thisArg, O[k], k, O))
        }
        k++
    }
    return res
}

Array.prototype.forEach = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('und null')
    }
    if (typeof callback == 'function') {
        throw new TypeError('callback must be a function')
    }
    const O = Object(this)
    const length = O.length
    let k = 0
    while (k < length) {
        if (k in O) {
            callback.call(thisArg, O[k], k, O)
        }
        k++
    }
}

Array.prototype.reduce = function (callback, initilaValue) {
    if (this === undefined) {
        throw new TypeError('und  null')
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a fn')
    }
    const O = Object(this)
    const length = O.length
    let k = 0
    let pre
    if (arguments.length > 1) {
        pre = initilaValue
    } else {
        while (k < length && !(k in O)) {
            k++
        }
        if (k > length) {
            throw new TypeError('no initial value')
        }
        pre = O[k++]
    }
    while (k < length) {
        if (k in O) {
            acc = callback.call(acc, O[k], k, O)
        }
        k++
    }
    return acc
}
