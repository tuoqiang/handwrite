class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach((observer) => {
            observer.update()
        })
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`$ {
            this.name
        }
        update运行了, state: $ {
            this.subject.getState()
        }`)
    }
}

let subject = new Subject()
let observer1 = new Observer('observer1', subject)
let observer2 = new Observer('observer2', subject)
subject.setState(1)
subject.setState(2)

console.log(observer1)
console.log(observer2)
