class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);

console.log(count(root));

function count(root) {
  let count = 0;
  if (!root) return count;
  const stack = [root];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    if (!curr.left && !curr.right) count = count + 1;
  }

  return count;
}
