/* 对称二叉树 */
const isSymmetric = function (root) {
    if (!root) {
        return true
    }
    const isMirror = (left, right) => {
        if (!left && !right) {
            return true
        }
        if (
            left &&
            right &&
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        ) {
            return true
        }
        return false
    }
    return isMirror(root.left, root.right)
}
