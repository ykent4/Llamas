// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {

    var longestStr = '';
    var currentStr = '';

    //iterate through the string
    for (let i = 0; i < s.length; i++) {
      
      if (!currentStr.includes(s[i])) {
        currentStr = currentStr + s[i];
      } else {
        currentStr = currentStr.slice(currentStr.indexOf(s[i])+1, currentStr.length) + s[i];
      }

      if (currentStr.length > longestStr.length) {
        longestStr = currentStr;
      }
    }

    return longestStr.length;

};

