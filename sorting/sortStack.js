//sort stack with no additional data structures, and one additional stack allowed

function sortStack(stack) {
  var temp;
  var tempStack = new Stack();

  //move stack into tempStack except the last one
  while(stack.length > 1) {
    stack.push(tempStack.pop());
  }

  //while tempStack is not empty
  while(!tempStack.isEmpty()) {

    //while the top of the tempStack < top of stack && stack is not empty
    while(stack.peep() > tempStack.peep()) {

      //set temp to top of tempStack
      temp = tempStack.peep()
      //move sortedStack top to tempStack top
      tempStack.push(sortedStack.pop());
    }

    //move temp into the stack
    stack.push(tempStack.pop()); 
  }

    return stack;

}
