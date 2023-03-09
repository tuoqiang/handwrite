function add(a, b, c) {
    return a + b + c
}
let partialAdd = partial(add, 1)
const res = partialAdd(2, 3)
console.log(res)

function partial(fn, ...args) {
    return function () {
        return fn(...args, ...arguments)
    }
}
