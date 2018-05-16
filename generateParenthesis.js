/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function (n) {

  var result = ['('];

  //inner recursion goes through number of parenthesis - 1 (count) because you always know first one starts with (

  //base case, count === 1, add ) to all of the combinations in the result, return result

  //pass in the result as the first parameter and count as the second to keep count
    //loop through the result
    //get the count of ( and )
    //if count ( === ), then add ( to the combinations
    //if count ( === n, then add )
    //else push into the combinations each result with ( added and then each combination with ) added

  function innerHelper(combinations, count) {

    if (count === 1) {
      for (var i = 0; i < combinations.length; i++) {
        combinations[i] = combinations[i] + ')';
      }
      result = combinations;

    } else {

      var currCombination = [];

      for (var i = 0; i < combinations.length; i++) {

        var countOpen = 0;
        var countClose = 0;

        for (var j = 0; j < combinations[i].length; j++) {
          if (combinations[i][j] === '(') {
            countOpen++;
          } else {
            countClose++;
          }
        }

        if (countOpen === countClose) {
          currCombination.push(combinations[i]+'(');
        } else if (countOpen === n) {
          currCombination.push(combinations[i]+')');
        } else {
          currCombination.push(combinations[i]+'(');
          currCombination.push(combinations[i]+')');
        }
      }
      innerHelper(currCombination, count-1);
    }
  }

  innerHelper(result, n * 2 - 1)

  return result;
};


var generateParenthesis = function(n) {
  var result = []
  
  function test(left, right, cache, str) {
      if (left === 0 && right === 0) {
          cache.push(str)
          return
      }
      
      if (left === right) {
          test(left - 1, right, cache, str+'(')
      } else if (left === 0) {
          test(0, right - 1, cache, str+")")
      } else {
          test(left - 1, right, cache, str+'(')
          test(left, right-1, cache, str+')')
      }
  }
  
  test(n, n, result, '')
  
  return result
};