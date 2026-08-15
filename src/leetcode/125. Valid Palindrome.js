/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  const isAlphaNum = (c) => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');

  while (left <= right) {
    const c1 = s[left];
    if (!isAlphaNum(c1)) {
      left++;
      continue;
    }
    const c2 = s[right];
    if (!isAlphaNum(c2)) {
      right--;
      continue;
    }
    if (c1 !== c2) {
      return false;
    } else {
      right--;
      left++;
    }
  }

  return true;
};
