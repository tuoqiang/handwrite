// 递归版本
function inOrder(root) {
    if (!root) {
        return
    }
    preOrder(root.left)
    console.log(root.val)
    preOrder(root.right)
}

// 非递归版本
var inorderTraversal = function (root) {
    const res = []
    const stack = []
    let p = root
    while (!!p || stack.length) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        res.push(n.val)
        p = n.right
    }
    return res
}
