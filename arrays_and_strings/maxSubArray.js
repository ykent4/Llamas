var maxSubArrayLen = function(nums, k) {
  var maxLength = 0;
  var sum = 0;
  var map = {0 : -1};
  
  for(var i = 0; i < nums.length; i++) {
      sum += nums[i]
      if(!map.hasOwnProperty(sum)) {
          map[sum] = i;
      }
      
      if(map.hasOwnProperty(sum - k)) {
          maxLength = Math.max(maxLength, i - map[sum-k]);
      }
  }
  
  return maxLength;
  
};