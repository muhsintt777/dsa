/**
 * @param {number} numRows
 * @return {number[][]}
 */
// [1]
// [1,1]
// [1,2,1]
// [1,3,3,1]

var generate = function (numRows) {
  const arr = [[1]];
  let prev = [1];
  let prevLength = prev.length;
  let i = 0;
  while (i < numRows - 1) {
    let curr = [];
    const length = prevLength + 1;
    let j = 0;
    while (j < length) {
      const val1 = prev[j] || 0;
      const val2 = prev[j - 1] || 0;
      curr.push(val1 + val2);
      j++;
    }
    arr.push(curr);
    prev = curr;
    prevLength = length;
    i++;
  }
  return arr;
};
