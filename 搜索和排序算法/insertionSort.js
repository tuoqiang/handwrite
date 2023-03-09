function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j = i
        while (j > 0) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
            j--
        }
        arr[j] = temp
    }
}

// 功能测试
const arr = [4, 3, 6, 2, 5, 7, 9, 8, 1]
insertionSort(arr)
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
