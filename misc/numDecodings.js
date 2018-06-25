//Given a non-empty string containing only digits, determine the total number of ways to decode it.

function numDecodings (string) {

  var dp = [];
  dp[0] = 1;
  dp[1] = string[0] === '0' ? 0 : 1;

  for (var i = 2; i <= string.length; i++) {
    var oneDigit = parseInt(s.substring(i, i-1));
    var twoDigit = parseInt(s.substring(i, i-2));

    dp[i] = 0;

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] = dp[i] + dp[i-1]
    } 
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] = dp[i] + dp[i-2];
    }
  }

  return dp[string.length];
}




