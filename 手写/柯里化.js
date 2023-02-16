function add(a, b, c) {
    return a + b + c
}
// add(1, 2, 3) // 6

const curryAdd = curry(add)
curryAdd(1)(2)(3) // 6

function curry() {
    // ...
}

// 参数长度固定
function curry(fn) {
    let len = fn.length
    let args = []
    function calc() {
        args = [...args, ...arguments]
        if (args.length < len) {
            return calc
        } else {
            return fn.apply(this, args)
        }
    }
    return calc
}
