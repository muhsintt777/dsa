/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// testcase: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3 => [1, 2, 2, 3, 5, 6]

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let wr = m + n - 1;

  while (p2 >= 0) {
    const val1 = nums1[p1];
    const val2 = nums2[p2];

    if (val1 >= val2) {
      nums1[wr] = val1;
      p1--;
      wr--;
    } else {
      nums1[wr] = val2;
      p2--;
      wr--;
    }
  }
};
