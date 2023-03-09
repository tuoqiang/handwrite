function myIs(x, y) {
    if (Number.isNaN(x) && Number.isNaN(y)) {
        return true
    }
    if ((x === 0 && y === -0) || (x === -0 && y === 0)) {
        return false
    }
    return x === y
}
console.log(myIs(1, 1)) // true
console.log(myIs(true, true)) // true
console.log(myIs('123', '123')) // true
console.log(myIs(NaN, NaN)) // true
console.log(myIs(0, -0)) // false
console.log(myIs(-0, 0)) // false
