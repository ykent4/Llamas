//given a sorted array, write a bst with minimum height

/*
  algo - the middle of the array is the root, and break down by subarray
*/
function minimumBST (array) {

  var midPoint = array[Math.floor(array.length/2)];
  var head;

  function innerTreeMaker(currentArr) {

    if(currentArr.length === 0) return null;
    if(currentArr.length === 1) return currentArr[0];

    var mid = Math.floor(currentArr.length / 2);
    var currentNode = new Node (array[mid]);

    if (head === null) {
      head = currentNode;
    }

    currentNode.left = innerTreeMaker(currentArr.slice(0, mid));
    currentArr.right = innerTreeMaker(currentArr.slice(mid));

  }

  innerTreeMaker(array)

  return head;
}

var Node = function (value) {
  this.value = value;
  this.left = this.right = null;
}

