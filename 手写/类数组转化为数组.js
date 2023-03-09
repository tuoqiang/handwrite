function fn1(arrLike) {
    return [...arrLike]
}

function fn2(arrLike) {
    return Array.from(arrLike)
}

function fn3(arrLike) {
    return [].slice.call(arrLike)
}

function fn4(arrLike) {
    return Array.prototype.concat.apply([], arrLike)
}
