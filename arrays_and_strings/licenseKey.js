var licenseKeyFormatting = function (string, k) {
  var result = '';
  var word = '';

  //loop through the string backwards
  for (var i = string.length - 1; i >= 0; i--) {
    //if character is not -
    if (string[i] !== '-') {
      //word += string[i]
      word += string[i];
      //if (k === word.length) word + '-' + result and word set back to ''
      if (k === word.length) {
        result = word + '-' + result;
        word = '';
      }
    }
  }

  //if word has anything in it
  //add word + '-' to result

  return result.substring(0, result.length - 1).toUpperCase();
}