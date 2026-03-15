/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const limit = nums.length;
  let p = 0;
  const set = new Set();

  for (n of nums) {
    set.add(n);

    while (set.has(p)) {
      p++;
    }
  }

  return p;
};
