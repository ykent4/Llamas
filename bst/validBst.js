function isValidBSTHelper(root, min, max) {
  min = min || null;
  max = max || null;

  if (root === null) {
    return true;
  }

  if ((min !== null && root.val <= min) || max !== null && root.val >= max) {
    return false;
  }

  return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}