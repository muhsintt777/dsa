/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// testcase: [3, 2, 2, 3], val = 3

var removeElement = function (nums, val) {
  let k = -1;
  let i = 0;

  while (i < nums.length) {
    const curr = nums[i];
    if (curr !== val) {
      k++;
      nums[k] = curr;
    }
    i++;
  }

  return k + 1;
};
