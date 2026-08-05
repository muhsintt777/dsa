/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  const prefix = new Array(nums.length);
  let low = null;

  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + (prefix[i - 1] ?? 0);
    if (low === null) {
      low = sum;
    } else {
      low = Math.min(low, sum);
    }
    prefix[i] = sum;
  }

  return low < 0 ? Math.abs(low) + 1 : 1;
};
