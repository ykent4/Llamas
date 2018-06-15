//check if linkedlist is palindrome

var LinkedList = function (value) {
  this.val = value;
  this.next = null;
};

function palindrome(head) {
  //traverse to get the count
  //make reversed linkedlist from the first half
  //compare to the second half and return true or false

  var totalCount = 0;
  var currentCount = 0;
  var mid = 0;
  var currentNode = head;
  var l2 = new LinkedList('new');

  while (currentNode !== null) {
    totalCount++;
    currentNode = currentNode.next;
  }

  //take the Math.ceiling of the totalCount / 2
  //takes care of the even or odd total linkedList situation

  currentNode = head;
  mid = Math.ceil(totalCount / 2);

  while (currentNode !== null) {

    if (currentCount < mid) {
      var newNode = new LinkedList(currentNode.val);
      newNode.next = l2;
      l2 = newNode;
    }

    if(totalCount % 2 === 1 && currentCount === mid) {
      l2 = l2.next;
    }

    if(currentCount >= mid) {
      if(l2.val !== currentNode.val) {
        return false;
      }
      l2 = l2.next;
    }

    currentCount++;
    currentNode = currentNode.next;
  }

  return true;
}


//test
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a));