/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }
    const rootVal = preorder[0]
    const leftChildTreeLen = inorder.indexOf(rootVal) // 在中序遍历中，此时的leftChildTreeLen即代表以3为根的左右子树的分界点，也其实是左子树的个数
    const tree = new TreeNode(rootVal)
    tree.left = buildTree(
        preorder.slice(1, leftChildTreeLen + 1),
        inorder.slice(0, leftChildTreeLen)
    )
    tree.right = buildTree(
        preorder.slice(leftChildTreeLen + 1),
        inorder.slice(leftChildTreeLen + 1)
    )
    return tree
}
