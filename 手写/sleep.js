// promise实现
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
sleep(1000).then(() => {
    console.log(1)
})

// async实现
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
async function output() {
    let out = await sleep(1000)
    console.log(1)
    return out
}
output()

// Es5实现
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
async function output() {
    let out = await sleep(1000)
    console.log(1)
    return out
}
output()
