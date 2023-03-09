function mergeSort(arr) {
    if (arr.length === 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    const orderLeft = mergeSort(left)
    const orderRight = mergeSort(right)
    return merge(orderLeft, orderRight)
}

function merge(a, b) {
    let res = []

    while (a.length && b.length) {
        if (a[0] < b[0]) {
            res.push(a[0])
            a.shift()
        } else {
            res.push(b[0])
            b.shift()
        }
    }

    if (a.length) {
        res = res.concat(a)
    } else {
        res = res.concat(b)
    }

    return res
}

// 功能测试
const arr = [4, 3, 2, 1]
console.log(mergeSort(arr)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
