function add(a, b, c) {
    return a + b + c
}
// add(1, 2, 3) // 6

const curryAdd = curry(add)
const res = curryAdd(1)(2)(3) // 6
console.log(res)

// function curry() {
//     // ...
// }

// 参数长度固定
// function curry(fn) {
//     let len = fn.length
//     let args = []
//     function calc() {
//         args = [...args, ...arguments]
//         if (args.length < len) {
//             return calc
//         } else {
//             return fn.apply(this, args)
//         }
//     }
//     return calc
// }

function curry(fn) {
    const len = fn.length
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

function volume(h) {
    return (w) => {
        return (l) => {
            return l * w * h
        }
    }
}

//固定高度
const itemHeight = volume(100)

//计算其他不同情况
itemHeight(30)(200)
itemHeight(45)(32)
itemHeight(232)(2322)
