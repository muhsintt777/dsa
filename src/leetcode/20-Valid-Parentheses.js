/**
 * @param {string} s
 * @return {boolean}
 */
// test case: s = "()"

var isValid = function (s) {
  if (s.length === 1) return false;
  let i = 0;
  const stack = [];
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  while (i < s.length) {
    const curr = s[i];
    if (curr === '(' || curr === '{' || curr === '[') {
      stack.push(curr);
    } else {
      const last = stack.pop();
      if (map.get(curr) === last) {
        i++;
        continue;
      } else {
        return false;
      }
    }
    i++;
  }

  return stack.length === 0;
};
