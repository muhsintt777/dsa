/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const lastIndex = s.length - 1;
  let count = 0;
  let isStarted = false;
  for (let i = lastIndex; i >= 0; i--) {
    const c = s[i];
    if (c === ' ' && !isStarted) continue;
    if (c !== ' ' && !isStarted) isStarted = true;
    if (c === ' ' && isStarted) break;
    count++;
  }

  return count;
};
