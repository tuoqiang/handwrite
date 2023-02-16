/*
 * 第一种：手写
 */
function shallowCopy(obj) {
    let res = {}
    for (let prop in obj) {
        // if (obj.hasOwnProperty(prop)) {
        //   res[prop] = obj[prop];
        // }
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            res[prop] = obj[prop]
        }
    }
    return res
}

/*
 * 第二种：扩展运算符
 */
function shallowCopy2(obj) {
    return { ...obj }
}

/*
 * 第三种：concat
 */
function shallowCopy3() {
    const sourceArr = [{ a: 1 }, { b: 4 }]
    return Array.prototype.concat.call([], sourceArr)
    // return [].concat(sourceArr);
}

//test
const res3 = shallowCopy3()
console.log(res3)

/*
 * 第四种：slice
 */
function shallowCopy4() {
    const sourceArr = [{ a: 1 }, { b: 2 }]
    return sourceArr.slice(0)
}

// test
const res4 = shallowCopy4()
console.log(res4)

/*
 * 第五种：Obejct.assign
 */
function shallowCopy5() {
    const sourceArr = [{ a: 1 }, { b: 2 }]
    return Object.assign({}, sourceArr)
}
