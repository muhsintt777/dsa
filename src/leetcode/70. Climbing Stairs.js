/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 1;
  let count = 1;
  for (let i = 2; i <= n; i++) {
    const t = prev + 1 * count;
    prev = count;
    count = t;
  }

  return count;
};
