//child is running up n steps 1, 2, 3 at a time.
//implement a method to count how many ways the child can run up the stairs

function countChildSteps(n) {
  var possibleSteps = [1, 2, 3];
  var resultCount = 0;

  function innerStepsHelper(currentN) {
    if (currentN === 0) {
      resultCount++;
      return;
    }

    if (currentN < 0) {
      return;
    }

    for (var i = 0; i < possibleSteps.length; i++) {
      innerStepsHelper(currentN - possibleSteps[i]);
    }

  }

  innerStepsHelper(n);

  return resultCount;
}