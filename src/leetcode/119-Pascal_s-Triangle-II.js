/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
  let prev = [1];
  let prevLength = 1;

  let i = 1;
  while (i <= rowIndex) {
    const currLength = prevLength + 1;
    let arr = [];
    let j = 0;
    while (j < currLength) {
      const val1 = prev[j] || 0;
      const val2 = prev[j - 1] || 0;
      arr.push(val1 + val2);
      j++;
    }
    prev = arr;
    prevLength = currLength;
    i++;
  }

  return prev;
};
