// 防抖(简单版)
function debounce(fn, delay = 500) {
    // timer 是闭包中的
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

const input1 = document.getElementById('input1')
input1.addEventListener(
    'keyup',
    debounce(function (e) {
        console.log(e.target)
        console.log(input1.value)
    }, 600)
)

//防抖(合并版)
function debounce(fn, delay, isImmediate) {
    let timer = null
    let flag = true

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        if (isImmediate) {
            if (flag) {
                fn.apply(this, arguments)
                flag = false
            }
            timer = setTimeout(() => {
                flag = true
            }, delay)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay)
        }
    }
}

// 节流
function throttle(fn, delay = 100) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

const div1 = document.getElementById('div1')
div1.addEventListener(
    'drag',
    throttle(function (e) {
        console.log(e.offsetX, e.offsetY)
    })
)

//节流(合并)
function throttle(fn, delay, isImmediate) {
    let timer = null
    let flag = true

    return function () {
        if (timer) {
            return
        }
        if (isImmediate) {
            if (flag) {
                fn.apply(this, arguments)
                flag = false
            }
            timer = setTimeout(() => {
                flag = true
                timer = null
            }, delay)
        } else {
            timer = setTimeout(() => {
                fn.appay(this, arguments)
                timer = null
            }, delay)
        }
    }
}
