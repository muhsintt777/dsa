/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const set = new Set();

  let i = 0;
  while (i < nums.length) {
    const curr = nums[i];
    if (set.has(curr)) {
      set.delete(curr);
    } else {
      set.add(curr);
    }
    i++;
  }

  const res = set.values().next().value;
  return res;
};
