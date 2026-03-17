/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;

  const map = new Map();
  let sum = n;

  while (sum !== 1) {
    const str = sum.toString();
    let newSum = 0;
    let i = 0;
    while (i < str.length) {
      const curr = Number(str[i]);
      newSum += curr * curr;
      i++;
    }
    if (newSum === 1) return true;
    if (map.get(newSum) !== undefined) return false;
    sum = newSum;
    map.set(newSum, true);
  }
};
