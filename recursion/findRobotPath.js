//robot is in top left corner
//grid has r rows c columns
//can only move right and down
//there are certain cells that the robot cannot step on
//design path for the robot 

//input is a grid with cells offlimit
//output is the path (array of arrays with coordinates)

function robotPaths (grid) {
  var resultPath = [];
  var columnLength = grid.length - 1;
  var rowLength = grid[0].length - 1;

  function innerTraverseHelper(column, row, currentPath){
    
    if (column === columnLength && row === rowLength) {
      resultPath = currentPath;
    }

    if(column <= columnLength && row <= rowLength) {
      if(column < columnLength && grid[column+1][row] !== 'x') {
        innerTraverseHelper(column+1, row, currentPath.concat([[column, row]]));
      }
      if(row < rowLength && grid[column][row+1] !== 'x') {
        innerTraverseHelper(column, row+1, currentPath.concat([[column, row]]));
      }
    }
  }

  innerTraverseHelper(0,0,[[0,0]]);

  return resultPath;
}

var grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
];