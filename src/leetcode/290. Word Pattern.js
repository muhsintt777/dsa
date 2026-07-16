/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();
  const smap = new Map();

  let i = 0;
  let j = 0;
  while (i < pattern.length) {
    const pChar = pattern[i];

    let word = '';
    while (j < s.length) {
      const sChar = s[j];
      if (sChar === ' ') {
        j++;
        break;
      } else {
        word += sChar;
        j++;
      }
    }
    if (!word) return false;
    console.log(pChar, { word });

    const bij = map.get(pChar);
    const jib = smap.get(word);
    if (!bij) {
      map.set(pChar, word);
      if (jib) return false;
      smap.set(word, pChar);
    } else {
      const isMatch = bij === word && jib === pChar;
      if (!isMatch) return false;
    }

    i++;
  }
  if (j !== s.length) return false;

  console.log(map);
  return true;
};

// latest submission
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();
  const smap = new Map();

  let i = 0;
  let j = 0;
  const pLimit = pattern.length;
  const sLimit = s.length;
  while (i < pLimit) {
    const pChar = pattern[i];

    const start = j;
    while (j < sLimit) {
      const sChar = s[j];
      if (sChar === ' ') {
        break;
      }
      j++;
    }
    const word = s.slice(start, j);
    j++;
    if (!word) return false;

    const bij = map.get(pChar);
    const jib = smap.get(word);
    if (!bij) {
      map.set(pChar, word);
      if (jib) return false;
      smap.set(word, pChar);
    } else {
      const isMatch = bij === word && jib === pChar;
      if (!isMatch) return false;
    }

    i++;
  }
  if (j !== sLimit + 1) return false;

  return true;
};
