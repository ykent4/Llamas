function rotateMatrix(matrix) {

  var newMatrix = [...Array(matrix.length)].map(e => Array(matrix.length));

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      newMatrix[j][matrix.length-1-i] = matrix[i][j]
    }
  }

  return newMatrix;
}


//test
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

var newTestMatrix = rotateMatrix(testMatrix);

console.log('after:');
console.log(newTestMatrix[0]);
console.log(newTestMatrix[1]);
console.log(newTestMatrix[2]);
console.log(newTestMatrix[3]);