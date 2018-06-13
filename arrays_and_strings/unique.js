//implement function that determines if all numbers in the string is unique

function unique (string) {
  var strObj = {};
  for(var i = 0; i < string.length; i++) {
    if(strObj.hasOwnProperty(string[i])) {
      return false;
    } else {
      strObj[string[i]] = true;
    }
  }

  return true;
}