/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const start = needle[0];
  const needleEndIndex = needle.length - 1;

  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];
    if (char === start) {
      const left = i;
      let j = 0;
      for (j; j <= needleEndIndex; j++) {
        const leftChar = haystack[left + j];
        if (!leftChar) return -1;
        const rightChar = needle[j];
        if (leftChar !== rightChar) {
          break;
        }
      }
      if (j === needleEndIndex + 1) return i;
    }
  }

  return -1;
};
