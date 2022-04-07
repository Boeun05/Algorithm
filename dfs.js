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

const dfs = (graph, startNode) => {
  let needToVisit = []; //[C, ]
  let visited = []; //[A, C, I,J, H, G, B, D, F, E]

  needToVisit.push(startNode); //[A]

  while (needToVisit.length !== 0) {
    const node = needToVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node); //[A]
      needToVisit = [...needToVisit, ...graph[node]]; //[B, C]
    }
  }

  return visited
};

console.log(dfs(graph1, "A"))
