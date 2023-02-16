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
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    function dfs(node) {
        if (!node) {
            return 0
        }
        const left = dfs(node.left)
        const right = dfs(node.right)
        maxSum = Math.max(maxSum, left + node.val + right)
        const pathSum = node.val + Math.max(left, right, 0)
        return pathSum < 0 ? 0 : pathSum
    }
    dfs(root)
    return maxSum
}
