function Foo() {} // 已有的构造函数

function customNew(constructor, ...args) {
    // 1. 创建一个空对象，继承 constructor 的原型
    const obj = Object.create(constructor.prototype)
    // 2. 将 obj 作为 this ，执行 constructor ，传入参数
    constructor.apply(obj, args)
    // 3. 返回 obj
    return obj
}

const person = customNew(Foo, '杰拉德', 100)

function Foo() {} // 已有的构造函数

function customNew() {
    // 1 创建一个新对象
    let obj = {}
    // 2 获取构造函数: create的第一个参数
    let Con = [].shift.call(arguments)
    // 3 设置空对象的原型
    obj.__proto__ = Con.prototype
    // 4 绑定this，并执行构造函数
    let result = Con.apply(obj, arguments)
    // 5 确保返回值为对象
    return result instanceof Object ? result : obj
}

const person2 = create(Foo, '杰拉德', 40)

function new1(con, ...args) {
    const obj = Object.create(con.prototype)
    con.apply(obj, args)
    return obj
}

function new2() {
    let obj = {}
    const con = [].shift.call(arguments)
    obj.__proto = con.prototype
    const res = con.apply(obj, arguments)
    return obj instanceof Object ? res : {}
}
