//recursively multiply two numbers without the multiply operator

function recursivelyMultiply(n1, n2) {

  if(n2 === 1) {
    return n1
  }

  return n1 + recursivelyMultiply(n1, n2-1); 
}


