function reverseInt(n) {
  const isNegative = n < 0;

  const arr = n.toString().split('').reverse();
  if (isNegative) {
    arr.pop();
  }
  const res = (isNegative ? '-' : '') + arr.join('');

  return parseInt(res);
}
