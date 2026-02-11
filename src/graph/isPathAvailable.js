function isPathAvailable(graph, str, end) {
  const stack = [str];
  const visited = new Set();

  while (stack.length > 0) {
    const curr = stack.pop();

    if (visited.has(curr)) {
      continue;
    }
    visited.add(curr);
    if (curr === end) return true;

    const neighbors = graph[curr];
    for (let neigh of neighbors) {
      if (neigh) stack.push(neigh);
    }
    // if (neighbors?.length)  stack.push(...neighbors);
  }

  return false;
}
