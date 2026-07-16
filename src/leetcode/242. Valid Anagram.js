/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();
  let i = 0;
  const slimit = s.length;
  const tlimit = t.length;
  if (slimit !== tlimit) return false;

  while (i < slimit) {
    const scurr = s[i];
    if (sMap.has(scurr)) {
      sMap.set(scurr, sMap.get(scurr) + 1);
    } else {
      sMap.set(scurr, 1);
    }

    const tcurr = t[i];
    if (tMap.has(tcurr)) {
      tMap.set(tcurr, tMap.get(tcurr) + 1);
    } else {
      tMap.set(tcurr, 1);
    }

    i++;
  }

  for (const [key, val] of sMap) {
    const tVal = tMap.get(key);
    if (tVal !== val) {
      return false;
    }
  }
  return true;
};
