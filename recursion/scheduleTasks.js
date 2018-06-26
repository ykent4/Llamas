//given a char array representing tasks to do and n, the intervals before the same tasks can be done again
//return the minimum number of intervals needed to complete all tasks


var leastInterval = function(tasks, n) {
  const tasksArr = new Array(26);
  tasks.forEach(t => {
      const code = t.charCodeAt(0) - 'A'.charCodeAt(0);
      tasksArr[code] = (tasksArr[code] || 0)+1;
  });
  const sorted = tasksArr.sort((x,y)=>y-x);
  let i = 0;
  while(i <26 && sorted[i] === sorted[0]) i++;

  return Math.max(tasks.length, (sorted[0] - 1) * (n + 1) + i);
};



