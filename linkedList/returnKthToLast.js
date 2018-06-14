//implement algo to find kth to last item of linked list
//one way to iterate through linked list, store in array and put return based on array index

//two pointers 
  //one to iterate to the last one get a count
  //two to go through and find (count - kth)

  var linkedList = function(value) {
    this.value = value;
    this.next = null;
  };
  
  function kthToLast (k, head) {
    var counterNode = head;
    var kthPointer = head;
    var totalNodes = 0;
    var kthCounter = 0;
    var kthNode = head;
  
    while(counterNode !== null) {
      totalNodes++;
      counterNode = counterNode.next;
    }
  
    if(totalNodes < k || k < 0) {
      return null;
    }
  
     while(totalNodes - kthCounter - 1 > k) {
       kthNode = kthNode.next;
       kthCounter++;
     }
  
    return kthNode;
  }

//test
var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

kthToLast(3, a);

kthToLast(10, a);

kthToLast(-1, a);

kthToLast(0, a);

kthToLast(1, a);