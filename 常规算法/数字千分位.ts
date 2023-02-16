function format2(n: number): string {
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
