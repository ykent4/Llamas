var isValidBST = function(root, min, max) {

  if(root === null) {
      return true;
  }
     
  if(root !== null) {
      
      if((min !== undefined && root.val <= min) || (max !== undefined && root.val >= max)) {
          return false;
      }
      
      return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
  }
  
};

