function moveZero2(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let i
    let j = -1 // 指向第一个 0

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            // 第一个 0
            if (j < 0) {
                j = i
            }
        }

        if (arr[i] !== 0 && j >= 0) {
            // 交换
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n

            j++
        }
    }
}
