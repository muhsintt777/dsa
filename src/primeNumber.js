function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  const limit = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= limit; i++) {
    const mod = num % i;
    if (mod === 0) return false;
  }
  return true;
}

function getPrimes(num) {
  let res = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) res.push(i);
  }
  return res;
}
