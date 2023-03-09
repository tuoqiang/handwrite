// 第一种
function myIsNaN(val) {
    return typeof val === 'number' && window.isNaN(val)
}

// const res = myIsNaN(NaN)
// console.log(res)

// 第二种
function myIsNaN2(val) {
    return Number.isNaN(val)
}
const res2 = myIsNaN2(NaN)
console.log(res2)

// 第三种
function myIsNaN3(val) {
    return val !== val
}
const res3 = myIsNaN3(NaN)
console.log(res3)
