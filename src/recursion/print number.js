function printNumber(n, curr = 0) {
  if (curr > n) return;

  console.log(curr);
  printNumber(n, curr + 1);
}

printNumber(5);

function printNumberReverse(n, curr = n) {
  if (curr < 1) return;

  console.log(curr);
  printNumberReverse(n, curr - 1);
}

printNumberReverse(5);
