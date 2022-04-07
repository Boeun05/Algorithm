function solution(n, computers) {
  var answer = 0;
  let visited = [];

  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  const dfs = (computers, i) => {
    if (visited[i]) return;
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        dfs(computers, j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(computers, i);
    }
  }
  return answer;
}

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]]))