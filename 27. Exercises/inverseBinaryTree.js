function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  const helper = (_root) => {
    if (_root === null) return null;
    if (_root.left === null && _root.right === null) {
      return new TreeNode(_root.val);
    }
    const newNode = new TreeNode(_root.val);
    newNode.left = helper(_root.right);
    newNode.right = helper(_root.left);
    return newNode;
  };
  return helper(root);
};
