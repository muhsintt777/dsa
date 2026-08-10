/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();

  for (const n of nums1) {
    const count = map.get(n) ?? 0;
    map.set(n, count + 1);
  }

  const res = [];

  for (const n2 of nums2) {
    const count = map.get(n2);
    if (count > 0) {
      res.push(n2);
      map.set(n2, count - 1);
    }
  }

  return res;
};
