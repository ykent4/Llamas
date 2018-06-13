//compress string with counts of repeated characters

function stringCompression (string) {
  
  var strArr = string.split('');

  //one array with chars
  //one array with count
  //combine into string

  var charArr = [string[0]];
  var countArr = [1];
  var resultStr = '';

  for (var i = 1; i < string.length; i++) {
    if(string[i] !== string[i-1]) {
      charArr.push(string[i])
      countArr.push(1);
    } else {
      countArr[countArr.length-1]++;
    }
  }

  for (var j = 0; j < charArr.length; j++) {
      resultStr = resultStr + charArr[j] + countArr[j];
  }


  if (charArr.length === string) {
    return string;
  } else {
    return resultStr;
  }

}

console.log('aaaaaa', stringCompression('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompression('aabcccccaaa'), 'a2b1c5a3');