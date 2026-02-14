/**
 * @param {string} s
 * @return {number}
 */
const test = 'abccccdd';
// Output: 7

var longestPalindrome = function (s) {
  let palCount = 0;
  const map = new Map();
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    const count = (map.get(char) || 0) + 1;
    if (count === 2) {
      palCount = palCount + 2;
      map.delete(char);
    } else {
      map.set(char, count);
    }

    i++;
  }

  if (map.size) palCount++;

  return palCount;
};

console.log(longestPalindrome(test));
