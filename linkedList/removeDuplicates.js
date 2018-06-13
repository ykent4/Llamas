//remove duplicates from unsorted linked list
//what if temporary buffers not allowed

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function removeDuplicates (head) {
  var storedValues = {};
  var node = head;
  
  //put the first value into the stored values object
  storedValues[head.value] = true;

  //while loop through the linked list
  while(node !== null) {

    //check from the previous node, so you can set the current node.next = node.next.next
    if(node.next !== null && storedValues.hasOwnProperty(node.next.value)) {
      node.next = node.next.next;
    } else {

      //add to stored value object if in object
      if(node.next !== null) {
        storedValues[node.next.value] = true;
      }      
      
      node = node.next;
    }
  }

  return head;
}

//a second method is to create a checkDup function that goes through the linked list to check for duplicates and returns true/false


var printLinkedList = function(head) {
  var node = head;
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list');
};

//tests
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('g');
var i = new LinkedList('g');
var j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);

var k = new LinkedList('g');
var l = new LinkedList('g');
var m = new LinkedList('g');
var n = new LinkedList('b');
var o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
printLinkedList(k);

