//three types of edits on a string - remove a char, add a char, replace a char
//write a function to check if two strings are one or zero edits away from each other

function oneAway(str1, str2) {

  var differences = 0;
  var str1Obj = {};

  for (var i = 0; i < str1.length; i++) {
    if (!str1.hasOwnProperty(str1[i])) {
      str1Obj[str1[i]] = 1;
    } else {
      str1Obj[str1[i]]++;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (differences > 1) {
      return false;
    }

    if(str1Obj[str2[j]] && str1Obj[str2[j]] > 0) {
      str1Obj[str2[j]]--;
    } else {
      differences++;
    }
  }

  return differences < 2

}


// test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
