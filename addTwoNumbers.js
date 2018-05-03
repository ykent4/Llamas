var addTwoNumbers = function(l1, l2) {

  var val = 0, head, tail, currentNode;

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  //while (l1 and l2)
  while (l1 && l2) {
    //val = += sum of l1 and l2
    val += l1.val + l2.val;
    currentNode = new ListNode(val % 10);

    //if no head node, make head node the current new node with sum % 10
    if (!head) {
      head = currentNode;
      tail = currentNode;
    } else {
      tail.next = currentNode;
      tail = tail.next;
    }

    //if val is + 10, value = 1
    if (val >= 10) {
      val = 1;
    } else {
      val = 0;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  //while (l1)
  while (l1) {
    val += l1.val;
    currentNode = new ListNode(val % 10);
    tail.next = currentNode;
    tail = tail.next;
    
    if (val >= 10) {
      val = 1;
    } else {
      val = 0;
    }

    l1 = l1.next;
  }
    
  //while (l2)
  while (l2) {
    val += l2.val;
    currentNode = new ListNode(val % 10);
    tail.next = currentNode;
    tail = tail.next;
    
    if (val >= 10) {
      val = 1;
    } else {
      val = 0;
    }

    l2 = l2.next;
  }

  //while (val > 0)
  while (val > 0) {
    currentNode = new ListNode(1);
    tail.next = currentNode;
    tail = tail.next;
    val--;
  }

  return head;

}
  