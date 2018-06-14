//partition a linked list so that all elements smaller than x is to the left and all elements larger than x is to the right
//x can be anywhere in the right, doesn't have to be sorted

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

function partition(head, partition) {

  var smallList, smallListHead, largeList, largeListHead, currentNode;

  currentNode = head;

  while (currentNode !== null) {

    if (currentNode.value < partition && smallListHead){
      smallList.next = new LinkedList(currentNode.value);
      smallList = smallList.next;
    } else if (largeListHead) {
      largeList.next = new LinkedList(currentNode.value);
      largeList = largeList.next;
    }

    if (!smallList && currentNode.value < partition) {
      smallList = new LinkedList (currentNode.value);
      smallListHead = smallList
    }

    if (!largeList && currentNode.value >= partition) {
      largeList = new LinkedList(currentNode.value);
      largeListHead = largeList;
    }

    currentNode = currentNode.next;
  }

  smallList.next = largeListHead;

  return smallListHead;

}


//test

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(newa);