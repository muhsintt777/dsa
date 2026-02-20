/**
 * @param {number[]} digits
 * @return {number[]}
 */
// testcase: [1, 2, 3] => [1, 2, 4]

var plusOne = function (digits) {
  let last = digits.length - 1;

  while (last >= 0) {
    const inc = digits[last] + 1;
    if (inc < 10) {
      digits[last] = inc;
      return digits;
    } else {
      digits[last] = 0;
      last--;
    }
  }

  digits.push(0);
  const first = digits[0];
  if (first === 9) {
    digits[0] = 1;
  } else {
    digits[0] = first + 1;
  }
  return digits;
};
