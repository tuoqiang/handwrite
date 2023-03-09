let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let data = {
    name: '姓名',
    age: 18,
}

function render(templateStr, data) {
    const reg = /\{\{(\w+)\}\}/
    if (reg.test(templateStr)) {
        const key = reg.exec(templateStr)[1]
        templateStr = templateStr.replace(reg, data[key])
        return render(templateStr, data)
    }
    return templateStr
}

const res = render(template, data) // 我是姓名，年龄18，性别undefined
console.log(res)
