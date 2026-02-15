/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    const leftChar = str[left];
    const rightChar = str[right];

    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
