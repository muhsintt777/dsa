function power(base, exponent) {
  if (exponent < 1) return 1;

  return power(base, exponent - 1) * base;
}

console.log(power(2, 4));
