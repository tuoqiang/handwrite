function assign(target, ...source) {
    if (target == null) {
        throw new TypeError('null and und ')
    }
    let res
    source.forEach((obj) => {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    res[k] = obj[key]
                }
            }
        }
    })
    return res
}
