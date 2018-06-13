/**
 * param {character[][]} grid
 * return {number}
 */

var numIslands = function(grid) {
  var countIslands = 0;
  var currentI, currentJ;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        countIslands++;

        toggleLand(grid, i, j);

        grid[i][j] = '0';

      }
    }
  }

   function toggleLand (grid, i, j) {
    while (i < grid.length && j < grid[0].length && grid[i][j] === '1') {
      grid[i][j] = '0';
      toggleLand (grid, i+1, j);
      toggleLand (grid, i, j+1);
      if(i >= 1) {
         toggleLand (grid, i-1, j);
      }
      if(j >= 1) {
         toggleLand (grid, i, j-1);
      }
    } 
  };
    
  return countIslands;

};