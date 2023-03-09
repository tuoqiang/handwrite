function format2(n) {
    n = Math.floor(n) // 只考虑整数
    let res = ''
    const s = n.toString()
    const length = s.length
    for (let i = length - 1; i >= 0; i--) {
        const j = length - i
        if (j % 3 === 0) {
            if (i === 0) {
                res = s[i] + res
            } else {
                res = ',' + s[i] + res
            }
        } else {
            res = s[i] + res
        }
    }

    return res
}

function format(num) {
    const str = num.toString()
    const [iniPart, digPart] = str.split('.')
    console.log(iniPart)
    console.log(digPart)
    const length = iniPart.length
    let res = ''
    for (let i = length - 1; i >= 0; i--) {
        const j = length - i
        if (j % 3 === 0) {
            res = ',' + iniPart[i] + res
        } else {
            res = iniPart[i] + res
        }
    }
    res = res + '.' + digPart
    return res
}
console.log(myFormat(1087654.321))

function myFormat(num) {
    const str = String(num)
    const [intPart, floatPart] = str.split('.')
    let len = intPart.length
    let res = ''
    for (let i = len - 1; i >= 0; i--) {
        const j = len - i
        if (j % 3 === 0) {
            res = ',' + intPart[i] + res
        } else {
            res = intPart[i] + res
        }
    }
    res = res + '.' + floatPart
    return res
}
