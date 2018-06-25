//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

var letterCombinations = function(digits) {
  var result = [];

  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
    
  if(digits.length === 0) {
      return [];
  }

  //innerTraverse function takes in current combination
  function innerTraverse(currComb, currIndex) {
    //base case if currComb === digits.length, push into result
    if(currComb.length === digits.length) {
      result.push(currComb);
      return;
    }

    var currLetters = letters[digits[currIndex]];
    currIndex++;

    //iterate through the next letters
    for(var j = 0; j < currLetters.length; j++) {
      innerTraverse(currComb+currLetters[j], currIndex);
    }

  }
  
  //invoke the function inside of a for loop iterating through the possibilities of the first letter
    innerTraverse('', 0);


  return result;
};