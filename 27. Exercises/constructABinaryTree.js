const preOrder = [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 7];
const inOrder = [8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7];

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  if (inorder.length == 1) {
    preorder.shift();
    return new TreeNode(inorder[0]);
  }
  const rootValue = preorder.shift();
  const inorderIndex = inorder.indexOf(rootValue);
  const node = new TreeNode(inorder[inorderIndex]);
  node.left = buildTree(preorder, inorder.slice(0, inorderIndex));
  node.right = buildTree(preorder, inorder.slice(inorderIndex + 1));
  return node;
};
