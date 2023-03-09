class A {
    constructor(name) {
        this.name = name
    }

    getName = () => {
        console.log('我是Public', this.name)
    }
}

class B extends A {
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
        this.firends = ['前端', '资深']
    }

    getFirends = () => {
        console.log(this.firends)
    }

    // 对于继承的方法进行重写
    getName = () => {
        console.log('我是子类的getName', this.name)
    }
}

const instance1 = new B('jingcheng', 3)
instance1.getName()
instance1.firends.push('React')
const instance2 = new B('yideng', 4)
instance2.getName()
const instance3 = new A('laowang')
instance3.getName()

console.log(instance1, instance2)
