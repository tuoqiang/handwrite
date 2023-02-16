const box = document.getElementById('box')
if (box == null) throw new Error('box is null')
depthFirstTraverse2(box)

/**
 * 深度优先遍历
 * @param root dom node
 */
function depthFirstTraverse1(root) {
    visitNode(root)
    const childNodes = root.childNodes // .childNodes 和 .children 不一样
    if (childNodes.length) {
        childNodes.forEach((child) => {
            depthFirstTraverse1(child) // 递归
        })
    }
}

/**
 * 深度优先遍历
 * @param root dom node
 */
function depthFirstTraverse2(root) {
    const stack = []
    // 根节点压栈
    stack.push(root)
    while (stack.length > 0) {
        const curNode = stack.pop() // 出栈
        if (curNode == null) break
        visitNode(curNode)
        // 子节点压栈
        const childNodes = curNode.childNodes
        if (childNodes.length > 0) {
            // reverse 反顺序压栈
            Array.from(childNodes)
                .reverse()
                .forEach((child) => stack.push(child))
        }
    }
}

/**
 * 访问节点
 * @param n node
 */
function visitNode(n) {
    if (n instanceof Comment) {
        // 注释
        console.info('Comment node ---', n.textContent)
    }
    if (n instanceof Text) {
        // 文本
        const t = n.textContent?.trim()
        if (t) {
            console.info('Text node ---', t)
        }
    }
    if (n instanceof HTMLElement) {
        // element
        console.info('Element node ---', `<${n.tagName.toLowerCase()}>`)
    }
}
