/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const visited = new Map();
  const unique = new Set();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!visited.has(c)) {
      visited.set(c, i);
      unique.add(c);
      continue;
    }
    unique.delete(c);
  }

  return visited.get(unique.values().next().value) ?? -1;
};
