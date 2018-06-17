//detect if two given linked list intersect
//intersection is based on reference and not on value

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
}

//another method is to make two stacks for the two linked lists
  //since the tail will be at the top
  //pop off until you hit the last one that's equal

function intersection(l1, l2) {
  var l1Count = 0;
  var l2Count = 0;
  var l1Pointer = l1;
  var l2Pointer = l2;
  var intersection;

  //traverse both linked list once and find their tail and total nodes count
  while (l1Pointer !== null) {
    l1Count++;

    if (l1Pointer.next === null) {
      break;
    }

    l1Pointer = l1Pointer.next;
  }

  while (l2Pointer !== null) {
    l2Count++;

    if (l2Pointer.next === null) {
      break;
    }

    l2Pointer = l2Pointer.next;
  }

  //if pointers don't 
  if (l1Pointer !== l2Pointer) {
    return undefined;
  }
  
  //if they have the same tail, have two pointers go down each linked list
  //if one ll is longer, go down until it hits the same (total(l1) - count) = total(l2)
  //traverse linked list until you hit an equal node
  l1Pointer = l1;
  l2Pointer = l2;
  
  if (l1Count > l2Count) {
    l1Count--;
    l1Pointer = l1Pointer.next;
  } else if (l2Count > l1Count) {
    l2Count--;
    l2Pointer = l2Pointer.next;
  }

  while(l1Pointer !== null) {

    if(l1Pointer === l2Pointer) {
      intersection = l1Pointer;
      break;
    }

    l1Pointer = l1Pointer.next;
    l2Pointer = l2Pointer.next;
  }


  return intersection;
}


//test
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value);