/**
 * @param {number[]} nums
 * @return {number}
 */
// test case: [1, 1, 2]

var removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;
  let count = 1;

  while (right < nums.length) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (leftNum === rightNum) {
      right++;
    } else {
      left++;
      count++;
      nums[left] = nums[right];
      right++;
    }
  }

  return count;
};
