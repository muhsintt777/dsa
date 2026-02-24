/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  const top = {
    count: 0,
    el: null,
  };
  const map = new Map();

  let i = 0;
  const limit = nums.length;
  while (i < limit) {
    const curr = nums[i];
    const appear = (map.get(curr) || 0) + 1;
    if (top.count < appear) {
      top.count = appear;
      top.el = curr;
    }
    map.set(curr, appear);
    i++;
  }

  return top.el;
};

// Boyer-Moore Majority Vote Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candi = null;

  for (const num of nums) {
    if (count === 0) {
      candi = num;
      count++;
    } else if (candi === num) {
      count++;
    } else if (candi !== num) {
      count--;
    }
  }

  return candi;
};
