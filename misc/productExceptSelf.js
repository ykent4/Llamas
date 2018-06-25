var productExceptSelf = function(nums) {
    
     var resultArr = [];
     var currentProduct = 1;
     var rightSideProductArr = [1];
     var leftSideProduct = 1;

     for(let i = nums.length-1; i > 0; i--) {
        currentProduct = currentProduct * nums[i];
        rightSideProductArr.push(currentProduct);
     }

     rightSideProductArr = rightSideProductArr.reverse();

     for(let j = 0; j < nums.length; j++) {
         if (j !== 0) {
             leftSideProduct = leftSideProduct * nums[j-1];
         }
         resultArr.push(leftSideProduct * rightSideProductArr[j]);
     }

     return resultArr;

};
    


//create an array of the product from the back to the front (reserveArr)
//multiple from the front
//multiple product of the front to the product in the reverseArr at the index number

