// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function (s) {
  const romanNumMap = new Map();
  romanNumMap.set('I', 1);
  romanNumMap.set('V', 5);
  romanNumMap.set('X', 10);
  romanNumMap.set('L', 50);
  romanNumMap.set('C', 100);
  romanNumMap.set('D', 500);
  romanNumMap.set('M', 1000);

  romanNumMap.set('IV', 4);
  romanNumMap.set('IX', 9);
  romanNumMap.set('XL', 40);
  romanNumMap.set('XC', 90);
  romanNumMap.set('CD', 400);
  romanNumMap.set('CM', 900);

  const splittedRomanNum = s.split('');
  let number = 0;
  while (splittedRomanNum.length > 0) {
    const curr = splittedRomanNum.shift();
    const nextRom = curr + splittedRomanNum[0];
    const intNext = romanNumMap.get(nextRom);
    if (intNext) {
      number = number + intNext;
      splittedRomanNum.shift();
    } else {
      const int = romanNumMap.get(curr);
      number = number + int;
    }
  }

  console.log('result>> ', number);
  return number;
};
