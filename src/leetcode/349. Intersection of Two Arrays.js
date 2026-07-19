/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const visited = new Set();
  const added = new Set();
  const n1Limit = nums1.length;
  const n2Limit = nums2.length;
  const result = [];

  if (n1Limit < n2Limit) {
    for (const n of nums1) {
      if (visited.has(n)) continue;
      visited.add(n);
    }
    for (const m of nums2) {
      if (!visited.has(m) || added.has(m)) continue;
      result.push(m);
      added.add(m);
    }
  } else {
    for (const n of nums2) {
      if (visited.has(n)) continue;
      visited.add(n);
    }
    for (const m of nums1) {
      if (!visited.has(m) || added.has(m)) continue;
      result.push(m);
      added.add(m);
    }
  }

  return result;
};
