function printNumber(n, curr = 0) {
  if (curr > n) return;

  console.log(curr);
  printNumber(n, curr + 1);
}

printNumber(5);
