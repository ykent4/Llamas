//delete the node inputted from the linked list given only that node

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function deleteMiddleNode (node) {
  
  while(node !== null) {

    node.value = node.next.value;
    if(node.next.next === null) {
      node.next = null;
    }
    node = node.next;
  }
}

//test
var printList = function(head) {
  while(head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMiddleNode(c);
printList(a);