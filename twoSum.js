var twoSum = function(nums, target) {
    
    let result = null;
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        let index = hash[target - nums[i]]
        
        if (typeof hash[target - nums[i]] !== 'undefined') {
            result = [hash[target - nums[i]], i];
            break;
        } else {
            hash[nums[i]] = i;
        }
        
    }
    
    return result;

};