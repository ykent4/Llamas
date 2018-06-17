//given a circularly linked list, return the node at the beginning of the loop

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
}

/*
  where k is the distance before the start of the loop
  - when the fast runner has taken 2k steps (k steps into the loop), then slow runner enters the loop
  - fast runner is loop_size - k steps behind slow runner
  - fast runner catches up to slow runner at a rate of 1 step per unit of time
  - both initial collision spot and head is k from head of the loop
  - after getting the first collision spot, move one runner to head
  - then both runners take one step at a time until next collision to get the start of the loop
*/
function detectLoop (head) {

  //assume that the linked list is longer than 3 nodes, and there is a loop
  var slowRunner = head.next;
  var fastRunner = head.next.next;

  
  while(slowRunner !== null && fastRunner !== null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if(slowRunner === fastRunner) {
      break;
    }
  }

  if(fastRunner === null || fastRunner.next === null) {
    return null;
  }

  slowRunner = head;

  while(slowRunner !== fastRunner) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }

  return slowRunner;

}

/* TEST */
// A -> B -> C -> D -> E -> C

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
f.next = c;

console.log(detectLoop(a), true);

var A = new LinkedList('a');
var B = new LinkedList('b');
var C = new LinkedList('c');
var D = new LinkedList('d');
var E = new LinkedList('e');
var F = new LinkedList('f');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(detectLoop(A), false);