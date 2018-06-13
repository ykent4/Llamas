/*
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/

/**
  param {number[][]} envelopes
  return {number}
 */

var maxEnvelopes = function(envelopes) {
  //declare count at 0
  var resultCount = 0;
  //declare variable sortedFirst
  var sortedFirst = [];
  //declare variable leastSecond and set to 0
  var leastSecond = 0;
  //declare variable envelopes as empty obj
  var envelopesObj = {};

  if(envelopes.length === 0) {
    return 0;
  }

  //put all the tuples into the object with the first index being the key and the second index being the value (in an array)
  for (var i = 0; i < envelopes.length; i++) {
    if (!envelopesObj.hasOwnProperty(envelopes[i][0])) {
      envelopesObj[envelopes[i][0]] = [envelopes[i][1]];
    } else {
      //if already have key, push the second value of the tuple into array
      envelopesObj[envelopes[i][0]].push([envelopes[i][1]]);
    }
  }
    //iterate through the obj, if the value array has length > 1, sort
  for (var prop in envelopesObj) {
    if (envelopesObj[prop].length > 1) {
      envelopesObj[prop].sort();
    }
  }

  sortedFirst = Object.keys(envelopesObj);
  sortedFirst.sort();
  leastSecond = envelopesObj[sortedFirst[0]];
  resultCount++;

  //iterate through sortedFirst array, 
  for (var i = 0; i < sortedFirst.length; i++) {
    //if there is a value in the envelopes obj with the sortedFirst[i] as key and has is bigger than leastSecondIndex
    var secondItemIndex = 0;
    while(secondItemIndex < envelopesObj[sortedFirst[i]].length) {

      //set leastSecondIndex to the current second index
      if (envelopesObj[sortedFirst[i]][secondItemIndex] > leastSecond) {
        leastSecond = envelopesObj[sortedFirst[i]][secondItemIndex];
        resultCount++;
        break;
      }

      secondItemIndex++;
    }

  }
  return resultCount;
};