var checkTree = function (root1, root2) {

  var isSubTree = false;

  if (root1 === null) {
    return false;
  }

  if (root1.val === root2.val) {
    isSubTree = checkEquals(root1, root2);
  }

  return isSubTree || checkTree(root1.left, root2) || checkTree(root1.right, root2);
}

var checkEquals = function (tree1, tree2) {

  if (!tree1 || !tree2) {
    return !tree1 && !tree2;
  }

  if(tree1.val !== tree2.val) {
    return false;
  }

  return checkEquals(tree1.left, tree2.left) && checkEquals(tree1.right, tree2.right);

}