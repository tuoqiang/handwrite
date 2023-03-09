class MyEvent {
    constructor() {
        this.evnets = {}
        this.events = {
            key1: [
                { fn: 'fn1', once: true },
                { fn: 'fn2', once: false },
            ],
            key2: [
                { fn: 'fn1', once: true },
                { fn: 'fn2', once: false },
            ],
        }
    }

    once(eventName, fn, isOnce = true) {
        this.on(eventName, fn, isOnce)
    }

    on(eventName, fn, isOnce) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push({
            fn: fn,
            once: isOnce,
        })
    }

    off(eventName, fn) {
        if (!fn) {
            this.events[eventName] = []
        } else {
            const fnList = this.events[eventName]
            if (fnList) {
                this.events[eventName] = fnList.filter((item) => fn != item.fn)
            }
        }
    }

    emit(eventName, ...args) {
        const fnList = this.events[eventName]
        if (!fnList) {
            return
        }
        this.events[eventName] = fnList.filter((item) => {
            const { once, fn } = item
            fn(...args)
            if (!once) {
                return true
            }
            return false
        })
    }
}

const e = new MyEvent()
function fn1(a, b) {
    console.log('函数1', a, b)
}
function fn2(a, b) {
    console.log('函数2', a, b)
}

e.on('yes', fn1)
e.emit('yes', 1, 2)
e.emit('yes', 1, 2)
