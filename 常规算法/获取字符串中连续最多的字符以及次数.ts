interface IRes {
    char: string
    length: number
}

function findContinuousChar2(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0,
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0 // 临时记录当前连续字符的长度
    let i = 0
    let j = 0

    // O(n)
    for (; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++
        }

        if (str[i] !== str[j] || i === length - 1) {
            // 不相等，或者 i 到了字符串的末尾
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 0 // reset

            if (i < length - 1) {
                j = i // 让 j “追上” i
                i-- // 细节
            }
        }
    }

    return res
}
