/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const visited = new Set();
  let currMax = {
    1: nums[0],
    2: null,
    3: null,
  };
  visited.add(nums[0]);

  let i = 1;
  while (i < nums.length) {
    const curr = nums[i];
    if (!visited.has(curr)) {
      visited.add(curr);
      if (currMax[1] === null || currMax[1] < curr) {
        currMax[3] = currMax[2];
        currMax[2] = currMax[1];
        currMax[1] = curr;
      } else if (currMax[2] === null || currMax[2] < curr) {
        currMax[3] = currMax[2];
        currMax[2] = curr;
      } else if (currMax[3] === null || currMax[3] < curr) {
        currMax[3] = curr;
      }
    }

    i++;
  }

  let res;
  if (currMax[3] !== null) {
    res = currMax[3];
  } else {
    res = currMax[1];
  }
  return res;
};
