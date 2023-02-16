/*
 * 递归版-前序遍历
 */
function preOrder(root) {
    if (!root) {
        return
    }
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

/*
 * 迭代版-前序遍历
 */
function preOrder(root) {
    if (!root) {
        return []
    }
    const res = []
    const stack = []
    if (root) {
        stack.push(root)
    }
    while (stack.length) {
        const node = stack.pop()
        res.push(node.val)
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res
}
