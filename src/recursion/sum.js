function sum(n, currsum = 0, curr = 1) {
  if (curr > n) return currsum;

  currsum += curr;
  const res = sum(n, currsum, curr + 1);
  if (res) return res;
}

console.log(sum(5));
