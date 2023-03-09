function myInstanceof(instance, rightConstructor) {
    if (instance == null) {
        // null 和 undefined
        return false
    }
    const type = typeof instance
    if (type !== 'object' && type !== 'function') {
        // 值类型
        return false
    }

    let instanceCopy = instance
    while (instanceCopy) {
        if (instanceCopy.__proto__ === rightConstructor.prototype) {
            return true
        }
        instanceCopy = instanceCopy.__proto__
    }
    return false
}
