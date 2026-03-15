/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefix = [0];

  let i = 0;
  while (i < nums.length) {
    const next = nums[i] + this.prefix[i];
    this.prefix.push(next);
    i++;
  }

  console.log(this.prefix);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const sum = this.prefix[right + 1] - this.prefix[left];
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
