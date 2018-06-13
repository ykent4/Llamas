// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

function ListNode(val) {
  this.val = val;
  this.next = null;
};

var removeNthFromEnd = function(head, n) {
  var currentNode;
  var prevNode;
  var count = 0;
  var total = 0;
    
    
  currentNode = head;
  while(currentNode) {
    total++;
    currentNode = currentNode.next;
  }
    
  if( total === 1 && n === 1) {
     head = [];
     return head;
  }

  if (total === n) {
      head = head.next;
  }
    
  currentNode = head;

  while (count <= total-n) {
      
        count++;
        if(count === total-n) {
          prevNode = currentNode;
          if(currentNode.next){
             currentNode = currentNode.next;
             prevNode.next = currentNode.next;    
          } else {
              prevNode.next = null;
          }
          break; 
        }
        
    currentNode = currentNode.next
  }

  return head;
};