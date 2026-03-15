/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let p = 0;

  while (i < nums.length) {
    const curr = nums[i];
    if (curr === 0) {
      i++;
      continue;
    }
    const temp = nums[p];
    nums[p] = nums[i];
    nums[i] = temp;
    p++;

    i++;
  }
};
