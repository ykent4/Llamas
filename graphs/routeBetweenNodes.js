//given a directed graph, design an algo find out if there's a route between two nodes
function routeBetweenNodes(graph, value1, value2) {

  //do a breadthfirst search from both ends and return true if there's a collision

  //create queues for both searches
  var q1 = new Queue();
  var visited1 = {};

  visited[value1] = true;

  if(graph.hasNode(value1)) {
    for (var edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }
  // take turns dequeueing until empty
  var nextEdge1;

  while (!q1.isEmpty()) {
    // if has queue, return true
    if (!q1.isEmpty()) {
      nextEdge1 = q1.remove();
      if (nextEdge1 === value2) {
        return true;
      }
      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if(graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            q1.add(edge);
          }
        }
      }
    }
  }

  return false;
}


var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');


console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), true);
console.log(checkRoute('D', 'E', graph), true);