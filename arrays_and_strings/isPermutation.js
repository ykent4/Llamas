//given two strings, write a function that determines if one is a permutation of the other

function isPermutation(string1, string2) {

  var sortedString1 = string1.split('').sort().join('');
  var sortedString2 = string2.split('').sort().join('');

  return sortedString1 === sortedString2;

}