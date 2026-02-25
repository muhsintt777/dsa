// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    const isVisited = set.has(num);
    if (isVisited) {
      return true;
    } else {
      set.add(num);
    }
  }

  return false;
};
