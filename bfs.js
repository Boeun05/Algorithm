const graph1 = {
  A: ["B", "C"],
  B: ["C", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D", "F"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const bfs = (graph, startNode) => {
  let needToVisit = [];
  let visited = [];

  needToVisit.push(startNode);

  while (needToVisit.length !== 0) {
    const node = needToVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needToVisit = [...needToVisit, ...graph[node]];
    }
  }

  return visited
};


console.log(bfs(graph1, 'A'))