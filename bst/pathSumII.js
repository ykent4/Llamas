//Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * param {TreeNode} root
 * param {number} sum
 * return {number[][]}
 */
var pathSum = function (root, sum) {
  var result = [];

  function innerHelper(node, currentResult, currentSum) {
    if (currentSum === 0) {
      result.push(currentResult);
      return;
    }

    currentResult.push(node.value);
    currentSum = currentSum - node.value;

    if (node.left !== null) {
      innerHelper(node.left, currentResult, currentSum);
    }

    if (node.right !== null) {
      innerHelper(node.right, currentResult, currentSum);
    }
  }

  innerHelper(root, sum)

  return result;

};