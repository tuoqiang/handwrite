function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const left = []
    const right = []
    const mid = arr[0]

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), mid, ...quickSort(right)]
}

const testArr = [3, 2, 5, 1, 8, 7]
const res = quickSort(testArr)
console.log(res)
