/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) {
        return 0
    }
    const q = [root]
    let depth = 0
    while (q.length) {
        const len = q.length
        depth = depth + 1
        for (let i = 0; i < len; i++) {
            const n = q.shift()
            n.left && q.push(n.left)
            n.right && q.push(n.right)
            if (!n.left && !n.right) {
                return depth
            }
        }
    }
}
