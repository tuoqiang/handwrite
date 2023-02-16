// 递归版本
const postOrder = (root) => {
    if (!root) {
        return
    }
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
}

// 非递归版本
var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    const res = []
    const stack = [root]
    const stackOutput = []
    while (stack.length) {
        const n = stack.pop()
        stackOutput.push(n)
        n.left && stack.push(n.left)
        n.right && stack.push(n.right)
    }

    while (stackOutput.length) {
        const n = stackOutput.pop()
        res.push(n.val)
    }
    return res
}
