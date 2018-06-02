function equidistantTriples(coordinates) {
  let count = 0;
  
  for (let i = 0; i < coordinates.length; i++) {
    let coordinatesToFind = {};
    for (let n = coordinates.length - 1; n > i; n--) {
      if (coordinates[n] in coordinatesToFind) {
        count++;
      }
      let toFind = coordinates[i] + (coordinates[n] - coordinates[i])/2;
      coordinatesToFind[toFind] = 1;
    }
  }
  return count;
}