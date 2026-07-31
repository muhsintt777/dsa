/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const limit = nums.length;
  const prefix = new Array(limit);
  const posfix = new Array(limit);
  prefix[0] = 1;
  posfix[limit - 1] = 1;

  let i = 0;
  while (i < limit - 1) {
    const sum1 = nums[i] * prefix[i];
    const sum2 = nums[limit - i - 1] * posfix[limit - i - 1];
    prefix[i + 1] = sum1;
    posfix[limit - 2 - i] = sum2;
    i++;
  }

  const result = new Array(limit);
  for (let i = 0; i < limit; i++) {
    result[i] = prefix[i] * posfix[i];
  }

  return result;
};
