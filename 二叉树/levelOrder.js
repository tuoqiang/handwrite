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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    const res = []
    const q = [root]
    while (q.length) {
        const len = q.length
        const curLevelArr = []
        for (let i = 0; i < len; i++) {
            const n = q.shift()
            curLevelArr.push(n.val)
            n.left && q.push(n.left)
            n.right && q.push(n.right)
        }
        res.push(curLevelArr)
    }
    return res
}
