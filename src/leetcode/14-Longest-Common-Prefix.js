/**
 * @param {string[]} strs
 * @return {string}
 */
// test case: ["flower","flow","flight"]

//horizontal aproach
var longestCommonPrefix = function (strs) {
  let res = strs[0];
  const limit = res.length;
  let i = 1;

  while (i < strs.length) {
    const next = strs[i];

    let j = 0;
    while (j < limit) {
      const char1 = res[j];
      const char2 = next[j];

      if (char1 === char2) {
        j++;
        continue;
      } else {
        res = res.slice(0, j);
        console.log('res>>', res);
        break;
      }
    }

    i++;
  }

  return res;
};
