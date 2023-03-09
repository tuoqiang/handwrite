class myPromise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        let resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try {
            // 立即执行函数
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value)
        }
        if (this.state === 'rejected') {
            onRejected(this.reason)
        }
    }
}

var p = new myPromise((resolve, reject) => {
    resolve(1)
})
p.then((x) => {
    console.log(x)
})



class MyPromise {
    constructor(excutoor) {
        this.state = 'pedding'
        this.reason = ''
        this.vallue = ''
        const resolve = (value)=>{
            if(this.state === 'pedding')) {
                this.state = 'done'
                this.value = value
            }
        }
        const reject = (resson)=>{
            if(this.state === 'pedding')) {
                this.state = 'fail'
                this.resson = resson
            }
        }
        try {
            excutoor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        if(this.state === 'done') {
            onFulfilled(this.value)
        }
        if(this.state === 'fail') {
            onRejected(this.reason)
        }
    }
}
