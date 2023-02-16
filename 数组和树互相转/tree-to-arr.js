const tree = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                { id: 4, name: '部门D' },
                { id: 5, name: '部门E' },
            ],
        },
        {
            id: 3,
            name: '部门C',
            children: [{ id: 6, name: '部门F' }],
        },
    ],
}

/* [
    { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
] */

function convert1(root) {
    // Map
    const nodeToParent = new Map()
    const arr = []

    // 广度优先遍历，queue
    const queue = []
    queue.unshift(root) // 根节点 入队

    while (queue.length > 0) {
        const curNode = queue.pop() // 出队
        if (curNode == null) break

        const { id, name, children = [] } = curNode

        // 创建数组 item 并 push
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode?.id || 0
        const item = { id, name, parentId }
        arr.push(item)

        // 子节点入队
        children.forEach((child) => {
            // 映射 parent
            nodeToParent.set(child, curNode)
            // 入队
            queue.unshift(child)
        })
    }

    return arr
}
