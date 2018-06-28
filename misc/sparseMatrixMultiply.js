var multiply = function(A, B) {
  const [m, n] = [A.length, B[0].length];
  var res = new Array(m).fill(null).map(x => Array(n).fill(0) );

  for(var i = 0; i < m; i++) {
      for(var k = 0; k < A[0].length; k++) {
          if(A[i][k] != 0) {
              for(var j = 0; j < n; j++) {
                  res[i][j] += A[i][k] * B[k][j];
              }
          }
      }
  }
  return res;
};