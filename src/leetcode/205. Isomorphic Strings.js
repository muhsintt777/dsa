/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  const sLimit = s.length;
  const tLimit = t.length;
  if (sLimit !== tLimit) return false;

  for (let i = 0; i < sLimit; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap.has(sChar)) {
      const currS = sMap.get(sChar);
      if (currS !== tChar) return false;
    } else {
      sMap.set(sChar, tChar);
    }

    if (tMap.has(tChar)) {
      const currT = tMap.get(tChar);
      if (currT !== sChar) return false;
    } else {
      tMap.set(tChar, sChar);
    }
  }
  return true;
};
