interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    /**
     * 入队，在 tail 位置
     * @param n number
     */
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null,
        }

        // 处理 head
        if (this.head == null) {
            this.head = newNode
        }

        // 处理 tail
        const tailNode = this.tail
        if (tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode

        // 记录长度
        this.len++
    }

    /**
     * 出队，在 head 位置
     */
    delete(): number | null {
        const headNode = this.head
        if (headNode == null) return null
        if (this.len <= 0) return null

        // 取值
        const value = headNode.value

        // 处理 head
        this.head = headNode.next

        // 记录长度
        this.len--

        return value
    }

    get length(): number {
        // length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)）
        return this.len
    }
}
