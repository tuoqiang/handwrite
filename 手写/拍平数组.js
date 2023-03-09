// 拍平深度数组
const flatten2 = (arr) => {
    return arr.reduce(
        (acc, cur) =>
            Array.isArray(cur) ? [...acc, ...flatten2(cur)] : [...acc, cur],
        []
    )
}

var arr = [1, 2, [3, 4, [5, 6], 7, 8]]
const res = flatten2(arr)

//拍平指定深度的数组
function flatten(arr, depth = 1) {
    if (depth > 0) {
        return arr.reduce(
            (acc, val) =>
                acc.concat(
                    Array.isArray(val) ? flattenArray(val, depth - 1) : val
                ),
            []
        )
    } else {
        return arr.slice()
    }
}

var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 0]]]]
const res2 = flatten2(arr, 2)

const arr2 = [1, [2, [3, [4, 5]]], 6]
const res3 = flatten2(arr, 2)
// => [1, 2, 3, 4, 5, 6]

function myFlat(arr) {
    return arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? [...pre, ...myFlat(cur)] : [...pre, ...cur]
    }, [])
}

function myFlatDepth(arr, depth = 1) {
    if (depth > 0) {
        return arr.reduce((pre, cur) => {
            return Array.isArray(cur)
                ? [...pre, ...myFlatDepth(cur, depth - 1)]
                : [...pre, cur]
        }, [])
    } else {
        return arr.slice()
    }
}

const myRes = myFlatDepth(arr, 4)
console.log(myRes)
