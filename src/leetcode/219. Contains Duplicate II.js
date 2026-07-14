/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let left = 0;
  let right = 0;
  const set = new Set();

  while (right < nums.length) {
    const curr = nums[right];
    if (set.has(curr)) {
      return true;
    } else {
      set.add(curr);
      right++;
    }

    if (right - left > k) {
      set.delete(nums[left]);
      left++;
    }
  }

  return false;
};
