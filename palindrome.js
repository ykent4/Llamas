var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !==0)) {
        return false;
    }
    
    var reversedNum = 0;
    
    while (x > reversedNum) {
      reversedNum = reversedNum * 10 + x % 10;
      x = Math.floor(x/10);
    }
    
    console.log('x ' ,x);
    console.log('reversed ', reversedNum);
    return x === reversedNum || x === Math.floor(reversedNum/10);
    
};