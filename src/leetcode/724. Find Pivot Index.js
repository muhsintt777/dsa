/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const lastIndex = nums.length - 1;
  const prefix = new Array(nums.length + 1);
  const sufix = new Array(nums.length + 1);
  prefix[0] = 0;
  sufix[lastIndex + 1] = 0;

  for (let i = 0; i <= lastIndex; i++) {
    const sum = prefix[i] + nums[i];
    prefix[i + 1] = sum;
    const sum2 = sufix[lastIndex - i + 1] + nums[lastIndex - i];
    sufix[lastIndex - i] = sum2;
  }

  for (let j = 0; j <= lastIndex; j++) {
    if (prefix[j] === sufix[j + 1]) return j;
  }

  return -1;
};
