const _preOrder = [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 7];
const _inOrder = [8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7];

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTreeBadComplexity = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  if (inorder.length == 1) {
    preorder.shift();
    return new TreeNode(inorder[0]);
  }
  const rootValue = preorder.shift();
  const inorderIndex = inorder.indexOf(rootValue);
  const node = new TreeNode(inorder[inorderIndex]);
  node.left = buildTreeBadComplexity(preorder, inorder.slice(0, inorderIndex));
  node.right = buildTreeBadComplexity(preorder, inorder.slice(inorderIndex + 1));
  return node;
};

console.log(buildTreeBadComplexity([..._preOrder], [..._inOrder]));

// const buildTreeBetterComplexity = function(preOrder, inOrder) {
//   const newPreOrder = preOrder.reverse()
//   let dict = {}
//   inOrder.forEach((item, index) => {
//     dict[item] = index
//   })

//   const helper = (preorder, inorder, leftPointer, rightPointer) => {
//     if (preorder.length === 0 || inorder.length === 0) return null;
//     if (leftPointer > rightPointer) return null
//     // if (rightPointer === leftPointer) {
//     //   preorder.pop()
//     //   return new TreeNode(dict[leftPointer])
//     // }
//     const rootValue = preorder.pop()
//     const inorderIndex = dict[rootValue]
//     const node = new TreeNode(rootValue)
//     node.left = helper(preorder, inorder, 0, leftPointer, inorderIndex)
//     node.right = helper(preorder, inorder, inorderIndex + 1, rightPointer)
//     return node
//   }

//   return helper(newPreOrder, inOrder, 0, inOrder.length);
// }

// console.log(buildTreeBetterComplexity([..._preOrder], [..._inOrder]));
