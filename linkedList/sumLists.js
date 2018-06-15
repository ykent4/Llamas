//sum two linked lists. each linked list is a number and each node is a digit. ones digit is the tail, tens digit is the digit before that...

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

function sumLists(l1, l2) {

  var totalL1Nodes = 0;
  var totalL2Nodes = 0;
  var currL1Count = 0;
  var currL2Count = 0;
  var l1Node = l1;
  var l2Node = l2;
  var carryOver = 0;
  var resultList;

  while (l1Node !== null) {
    totalL1Nodes++;
    l1Node = l1Node.next;
  }

  while (l2Node !== null) {
    totalL2Nodes++;
    l2Node = l2Node.next;
  }

  l1Node = l1;
  l2Node = l2;

  while (currL1Count < totalL1Nodes || currL2Count < totalL2Nodes) {
    if (totalL1Nodes - currL1Count === totalL2Nodes - currL2Count) {
      
      if(l1Node.next.value + l2Node.next.value > 9) {
        carryOver = 1;
      }
      
      resultList = new LinkedList(l1Node.value + l2Node.value + carryOver)

      currL1Count++;
      currL2Count++;
      l1Node = l1Node.next;
      l2Node = l2Node.next;
    }

    if (totalL1Nodes - currL1Count > totalL2Nodes - currL2Count) {
      resultList = new LinkedList(l1Node.value)
    }

    resultList = resultList.next;
  }


  return l3;
}

function checkCarryOver (node1, node2) {
  
}

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);
var d = new LinkedList(2);

a.next = b;
b.next = c;
c.next = d;

var e = new LinkeeList(5);
var f = new LinkedList(9);
var g = new LinkedList(2);

e.next = f;
f.next = g;

var newHead = sumList(a, e);

console.log('correct answer is 7754')
printList(newHead);
