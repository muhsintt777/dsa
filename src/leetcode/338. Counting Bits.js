/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const limit = n + 1;
  const arr = new Array(limit);
  arr[0] = 0;
  let offset = 1;

  for (let i = 1; i < limit; i++) {
    const newOffset = offset * 2;
    if (i === newOffset) {
      offset = newOffset;
    }
    arr[i] = 1 + arr[i - offset];
  }

  return arr;
};
