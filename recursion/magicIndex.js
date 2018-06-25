//magic index is where A[i] === i
//distinct sorted array

//binary search
//the below is for distinct numbers, if the sorted array is not distinct, then you should recursively do the binary search on both sides of the array
function magicIndex (array, start = 0, end = array.length-1) {

  var mid = Math.floor((start + end)/ 2);

  if (array[mid] === mid) {
    return mid;
  }

  if(mid === start) {
    return -1
  }

  if(array[mid] > mid) {
    return magicIndex(array, start, mid-1);
  } else {
    return magicIndex(array, mid, end)
  } 
}

