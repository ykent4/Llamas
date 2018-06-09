function quickSort(array, start, end) {

  start = start || 0;
  end = end || array.length - 1;

  //when start is smaller then end, run the recursive function
  if(start < end) {

    //partition the array
    let pivotIndex = randomizedPartition(array, start, end);
    quickSort(array, start, pivotIndex-1);
    quickSort(array, pivotIndex+1, end);
  }

  return array;
}

function randomizedPartition(array, start, end) {
    
  var randomIndex = Math.floor(Math.random() * (end - start)) + start;
  swap(array, randomIndex, end);

  var pivotValue = array[end];
  var partitionIndex = start;

  
  for(var i = start; i < end; i++) {
    if(array[i] < pivotValue) {
      swap(array, partitionIndex, i);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, end);
  return partitionIndex;

}

function swap(array, startIndex, endIndex) {
  var temp = array[startIndex];
  array[startIndex] = array[endIndex];
  array[endIndex] = temp;
}


