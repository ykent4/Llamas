var minimumTotal = function (triangle) {

  if (triangle.length === 1) {
    return triangle[0][0];
  }

  if (triangle.length === 0) {
    return 0;
  }

  var resultsArr = triangle[triangle.length - 1];

  for (var i = triangle.length - 2; i >= 0; i--) {
    for (var j = 0; j < triangle[i].length; j++) {
      resultsArr[j] = Math.min(triangle[i][j] + resultsArr[j], triangle[i][j] + resultsArr[j + 1])
    }
  }

  return resultsArr[0]
};