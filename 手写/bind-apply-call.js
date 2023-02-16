function myBind(context, ...bindArgs) {
    // context 是 bind 传入的 this
    // bindArgs 是 bind 传入的各个参数
    let self = this // 当前的函数本身
    return function () {
        let params = [...bindArgs, ...arguments]
        return self.apply(context, params)
    }
}

/* 
1 首先context为可选参数，不传的话，默认上下文为window
2 接下来给context创建一个fn，并将值设置为需要调用的函数
3 因为call可以传入多个参数，所以将参数剥离出来
4 然后调用函数并将对象上的函数删除
*/

/* call */
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

const callResult = Array.prototype.concat.myCall([1, 2])
console.log(callResult)

/* apply */
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }

    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

const applyResult = Array.prototype.concat.myApply([1, 2], [3, 4])
console.log(applyResult)
