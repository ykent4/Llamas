//write a function that replaces all the space in a string with %20

function urlify (string) {
  var strArr = string.split('');
  
  for (var i = 0; i < string.length-1; i++) {
    if(strArr[i] === ' ' && strArr[i+1] !== ' ') {
      strArr[i] = '%20';
    }
  }

  return strArr.join('');

}


console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
