function ajax(url, successFn) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, false)
    xhr.onreadystatechange = function () {
        // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                successFn(xhr.responseText)
            }
        }
    }
    xhr.send(null)
}
