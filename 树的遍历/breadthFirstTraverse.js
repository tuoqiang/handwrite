/**
 * 广度优先遍历
 * @param root dom node
 */
function breadthFirstTraverse(root) {
    const queue = [] // 数组 vs 链表
    // 根节点入队列
    queue.unshift(root)
    while (queue.length > 0) {
        const curNode = queue.pop()
        if (curNode == null) break
        visitNode(curNode)
        // 子节点入队
        const childNodes = curNode.childNodes
        if (childNodes.length) {
            Array.from(childNodes).forEach((child) => queue.unshift(child))
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

const box = document.getElementById('box')
if (box == null) throw new Error('box is null')
breadthFirstTraverse(box)
