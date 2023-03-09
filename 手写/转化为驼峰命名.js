let s1 = 'get-element-by-id'

function fn(str) {
    let arr = str.split('-')
    let arr2 = arr.map((item, index) => {
        if (index == 0) {
            return item
        }
        let start = item.slice(0, 1)
        let last = item.slice(1)
        return start.toUpperCase() + last
    })
    return arr2.join('')
}

const res = fn(s1)
console.log(res)
