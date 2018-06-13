function isPermutationOfPalindrome(string) {
  //lowercase to standardize the count of each character
  //remove the spaces
  //make sure either there is an even count of all characters or all even and one odd count

  var formattedStr = '';
  var strObject = {};
  var numOdd = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      formattedStr = formattedStr + string[i].toLowerCase();
    }
  }

  for (var j = 0; j < formattedStr.length; j++) {
    if (!strObject.hasOwnProperty(formattedStr[j])) {
      strObject[formattedStr[j]] = 1;
    } else {
      strObject[formattedStr[j]]++;
    }
  }

  for (var prop in strObject) {
    if (strObject[prop] % 2 !== 0) {
      numOdd++;
    }
  }

  if(formattedStr.length % 2 === 0) {
    return numOdd === 0;
  } else {
    return numOdd < 2;
  }

  

}

console.log(isPermutationOfPalindrome('Tact Coa'), 'true');
console.log(isPermutationOfPalindrome('Tact boa'), 'false');
