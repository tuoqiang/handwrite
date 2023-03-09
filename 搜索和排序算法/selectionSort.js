function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        if (indexMin !== i) {
            const temp = arr[i]
            arr[i] = arr[indexMin]
            arr[indexMin] = temp
        }
    }
}

// 功能测试
const arr = [4, 3, 6, 2, 5, 7, 9, 8, 1]
selectionSort(arr)
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
