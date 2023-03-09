function create(proto, properties = undefined) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('proto must be obj')
    }
    if (properties == null) {
        throw new TypeError('properties can not be null')
    }
    function F() {}
    F.prototype = proto
    let obj = new F()
    if (properties) {
        Object.defineProperties(obj, properties)
    }
    if (proto == null) {
        // 创建一个没有原型对象的对象，Object.create(null)
        obj.__proto__ = null
    }
    return obj
}
