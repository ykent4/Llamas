//compute the tallest possible stack of boxes
//the box above has to be larger in length, height and width
//cannot rotate

function stackBoxes (boxes) {

  var maxHeight = 0;

  if(boxes.length === 0) {
    return null;
  }

  function innerStack (baseBox, stackableBoxes, currentHeight) {

    if(stackableBoxes.length === 0) {
      if(maxHeight < currentHeight) {
        maxHeight = currentHeight;
      }
      return;
    }

    for(var i = 0; i < stackableBoxes.length; i++) {
      var newStackableBoxes = findStackableBoxes(stackableBoxes);
      innerStack(stackableBoxes[i], newStackableBoxes, currentHeight+stackableBoxes[i].height);
    }

  }

  for (var i = 0; i < boxes.length; i++) {
    stackableBoxes = findStackableBoxes(boxes[i], boxes);
    innerStack(boxes[i], stackableBoxes, boxes[i].height);
  }

  return maxHeight;

}

function findStackableBoxes (baseBox,  boxes) {
  var resultBoxes = [];

  for (var i = 0; i < boxes.length; i++) {
    if (baseBox.height > boxes[i].height && baseBox.width > boxes[i].width && baseBox.depth > boxes[i].depth) {
      resultBoxes.push(boxes[i]);
    }
  }

  return resultBoxes;
}


const box1e = {
  width: 1,
  height: 1,
  depth: 1
};
const box2e = {
  width: 2,
  height: 2,
  depth: 2
};
const box3e = {
  width: 3,
  height: 3,
  depth: 3
};
console.log(stackBoxes([box2e, box3e, box1e]), 6);

// 'unable to stack three boxes, one tall, one wide, one deep
const box1f = {
  width: 3,
  height: 1,
  depth: 1
};
const box2f = {
  width: 1,
  height: 3,
  depth: 1
};
const box3f = {
  width: 1,
  height: 1,
  depth: 3
};
console.log(stackBoxes([box1f, box2f, box3f]), 3);