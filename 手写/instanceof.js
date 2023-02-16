function myInstanceof(left, right) {
    if (left == null) {
        // null 和 undefined
        return false
    }
    const type = typeof left
    if (type !== 'object' && type !== 'function') {
        // 值类型
        return false
    }

    let instanceCopy = left
    while (instanceCopy) {
        if (left.__proto__ === right.prototype) {
            return true
        }
        instanceCopy = left.__proto__
    }
    return false
}
