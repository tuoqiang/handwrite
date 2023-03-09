var obj = {
    name: '大雄',
}
function fn(b) {
    b.name = '小熊'
}
fn(obj)
console.log(obj.name) // 输出多少
