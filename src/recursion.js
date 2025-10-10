export function findEmployeePosition(data, name) {
  let p = '';

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const res = findEmployeePosition(value, name);
      if (res) p = res;
    } else {
      if (value === name) {
        p = key;
      }
    }
  });

  if (p) return p;
}

export const factorialRecurion = (n) => {
  if (n <= 1) return 1;
  return n * factorialRecurion(n - 1);
};

export const fibonacciRecursion = (n) => {
  if (n <= 2) return n;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
};

export const sumOfArrayRecursion = (arr = []) => {
  if (arr.length === 1) return arr[0];
  if (!arr.length) return 0;
  console.log('arr-', arr);

  const lastElment = arr[arr.length - 1];
  arr.pop();
  return lastElment + sumOfArrayRecursion(arr);
};
