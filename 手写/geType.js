function getType(x) {
    const originType = Object.prototype.toString.call(x) // '[object String]'
    const spaceIndex = originType.indexOf(' ')
    const type = originType.slice(spaceIndex + 1, -1) // 'String'
    return type.toLowerCase() // 'string'
}
