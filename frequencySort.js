/*
Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/

var frequencySort = function(s) {

  var stringObj = {};
  var stringArr = [];
  var result = [];

  for (var i = 0; i < s.length; i++) {

    if (stringObj.hasOwnProperty(s[i])) {
      stringObj[s[i]]++;

    } else {
      stringObj[s[i]] = 1;
    }

  }

  for (var prop in stringObj) {
    stringArr.push([prop, stringObj[prop]]);
  }

  stringArr.sort((a,b) => b[1] - a[1]);

  for (var k = 0; k < stringArr.length; k++) {
    result.push(helperRepeat(stringArr[k][0], stringArr[k][1]));
  }
  
  return result.join('');
  
};

function helperRepeat (char, number) {
  
  var result = '';
  
  for (var k = 0; k < number; k++) {
    result = result + char;
  }

  return result;

}


var frequencySort = function(s) {
  const freq = s.split('').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {});

  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  let result = '';
  
  sorted.forEach(char => result = result.concat(char.repeat(freq[char])));
  return result;
};