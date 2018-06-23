//Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

function removeInvalidParens (string) {

  var result = [];
  var maxLength = 0;

  //recurse through the function
  function innerHelper(inputString, currentString, leftCount) {

    //base case
    if (inputString.length === 0) {
      if(currentString.length > maxLength) {
        maxLength = currentString.length;
      }

      if(currentString.length === maxLength && !result.includes(currentString)) {
        result.push(currentString);
      }
      return;
    }

    var char = inputString[0];

    if(char === '(') {
      innerHelper(inputString.substring(1), currentString+'(', leftCount+1);

    } else if(char === ')') {
      if(leftCount > 0) {
        innerHelper(inputString.substring(1), currentString+')', leftCount-1); 
      }
      innerHelper(inputString.substring(1), currentString, leftCount);

    } else {
      innerHelper(inputString.substring(1), currentString + char, leftCount);
    }
    
  }

  innerHelper(string, '', 0);

  return result;

}


