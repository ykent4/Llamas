function rotateMatrix(matrix) {

  var newMatrix = [...Array(matrix.length)].map(e => Array(matrix.length));

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      newMatrix[j][matrix.length-1-i] = matrix[i][j]
    }
  }

  return newMatrix;
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

let second = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]
]

//in place solution
var rotate = function(matrix) {
  let size = matrix.length;
  for (let layer = 0; layer < size/2; layer++) {
    let first = layer;
    let last = size - 1 - layer;
    for (let i = layer; i < size - 1 - layer; i++) {
      console.log('\n', matrix.join('\n'))
      let offset = i - layer;
      let temp = matrix[layer][i];
      matrix[layer][i] = matrix[size - 1 - layer - offset][layer];
      matrix[size - 1 - layer - offset][layer] = matrix[size - 1 - layer][size - 1 - layer - offset];
      matrix[size - 1 - layer][size - 1 - layer - offset] = matrix[i][size - 1 - layer];
      matrix[i][size - 1 - layer] = temp;
    }
  }
  console.log('final \n', matrix.join('\n'))
};

rotate(second)


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