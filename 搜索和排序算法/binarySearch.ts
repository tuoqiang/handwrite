/**
 * 凡是有序，必二分
 * 凡是二分，时间复杂度必包含 O(logn)
 * 递归代码思路清晰，非递归性能更好
 * @description 二分查找 (循环)
 * @author hovinghuang
 */

/**
 * 二分查找（循环）
 * @param arr
 * @param target
 * @returns
 */
function binarySearch01(arr: number[], target: number): number {
    const len = arr.length
    if (len === 0) return -1

    let startIndex = 0
    let endIndex = len - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2) // 将数字向下舍入到最接近的整数
        const midValue = arr[midIndex]

        if (target < midValue) {
            // 目标值较少，则继续在左侧查找
            endIndex = midIndex - 1
        } else if (target > midValue) {
            // 目标值较大，则继续在右侧查找
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }
    return -1
}

/**
 * 二分查找（递归）
 * @param arr
 * @param target
 */
function binarySearch02(
    arr: number[],
    target: number,
    startIndex?: number,
    endIndex?: number
): number {
    const length = arr.length
    if (length === 0) return -1

    // 开始和结束的范围
    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = length - 1

    // 如果 start 和 end 相遇则结束
    if (startIndex > endIndex) return -1

    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
        // 目标值较小，则继续在左侧查找
        return binarySearch02(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        // 目标值较大，则继续在右侧查找
        return binarySearch02(arr, target, midIndex + 1, endIndex)
    } else {
        // 相等，返回
        return midIndex
    }
}

// 功能测试
// const testArr = [-20, -10, 30];
// const testTarget = 30;
// console.info(binarySearch02(testArr, testTarget));

// 性能测试
// const testArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
// const testTarget = 30;
// console.time('binarySearch01')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch01(testArr, testTarget)
// }
// console.timeEnd('binarySearch01')

// console.time('binarySearch02')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch02(testArr, testTarget)
// }
// console.timeEnd('binarySearch02')
