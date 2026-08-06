/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    const sum = currSum + n;
    if (n >= sum) {
      currSum = n;
      maxSum = Math.max(maxSum, currSum);
    } else {
      currSum = sum;
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum;
};
