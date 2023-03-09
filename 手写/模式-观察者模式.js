class Subject {
    constructor(subjectName) {
        this.state = '100'
        this.subjectName = subjectName
        this.obsList = []
    }
    addObs(obs) {
        this.obsList.push(obs)
    }
    setState(state) {
        this.state = state
        this.obsList.forEach((obs) => {
            obs.update(this)
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(subject) {
        console.log(
            `${this.name}收到通知：${subject.subjectName}的通知：${subject.state}`
        )
    }
}

const subject = new Subject('看球赛')
const obs1 = new Observer('小明')
const obs2 = new Observer('小红')
subject.addObs(obs1)
subject.addObs(obs2)
subject.setState('时间到可以看球赛了，请入场')
