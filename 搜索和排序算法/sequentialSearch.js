function sequentialSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
const arr = [4, 3, 6, 2, 5, 7, 9, 8, 1]
console.log(sequentialSearch(arr, 8)) // 7
