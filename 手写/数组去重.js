function fn(arr) {
    return [...new Set(arr)]
}

function fn2(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}

function fn3(arr) {
    const res = []
    for (item of arr) {
        if (!res.includes(item)) {
            res.push(item)
        }
    }
    return res
}

function fn4(arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) < 0) {
            res.push(arr[i])
        }
    }
    return res
}

function fn5(arr) {
    const res = []
    const map = new Map()
    for (item of arr) {
        if (!map.has(item)) {
            map.set(item, true)
            res.push(item)
        }
    }
    return res
}

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
const res = fn5(arr)
console.log(res)
