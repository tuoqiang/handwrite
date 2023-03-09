function fn() {
    return [...new Set(document.querySelectorAll('*'))].map((el) => {
        return el.tagName
    }).length
}
