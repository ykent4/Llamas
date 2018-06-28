function reverseLinkedList (head) {

  var prevNode, currNode, nextNode;
  currNode = head;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  head = prevNode;

  return head;
}




