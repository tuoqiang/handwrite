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

var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, , 0]]]]
const res2 = flatten2(arr, 2)
