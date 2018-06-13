function mergeSort (array) {

  if(array.length === 1) {
    return;
  }

  var midPoint = Math.floor((array.length) / 2); 

  return merge(mergeSort(array.slice(0, midPoint)), mergeSort(array.slice(midPoint)));
  
}

function merge (left, right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var resultArr = [];

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//recursively break down the array and then merge together to sort