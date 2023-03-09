let str = 'abcabcabcbbccccc'

function fn(str) {
    const map = new Map()
    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    let max = 0
    let res = []
    map.forEach((val, key) => {
        if (map.get(key) > max) {
            res = [map.get(key), key]
        }
    })
    return res
}

const res = fn(str)
console.log(res)
