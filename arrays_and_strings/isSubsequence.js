/*
Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.


 @param {string} s
 @param {string} t
 @return {boolean}

*/


var isSubsequence = function(s, t) {
  
  var count = 0;
  var sIndex = 0;

  for (var i = 0; i < t.length; i++) {
    if (t[i] === s[sIndex]) {
      count++;
      sIndex++;
    }
  }

  return count === s.length;

};


var isSubsequence = function(s, t) {
  let offset = 0
  
  for(let i = 0;i < s.length; i++){
      offset = t.indexOf(s[i], offset)
      if(offset++ === -1) return false
  }
  
  return true
};

isSubsequence('abc', 'ahbgdc');