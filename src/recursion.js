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

export const sumOfNestedObjectNums = (obj) => {
  let sum = 0;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object') {
      sum += sumOfNestedObjectNums(value);
    } else if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

export const countNestedObjKeys = (obj) => {
  let count = 0;
  for (const key in obj) {
    count++;
    if (typeof obj[key] === 'object') {
      count += countNestedObjKeys(obj[key]);
    }
  }
  return count;
};

export const findValueInNestedObj = (obj, target) => {
  for (const key in obj) {
    if (key === target) {
      return obj[key];
    } else if (typeof obj[key] === 'object') {
      const res = findValueInNestedObj(obj[key], target);
      if (res) return res;
    }
  }
};

export const collectAllNumsInNestedObj = (obj) => {
  let nums = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const res = collectAllNumsInNestedObj(obj[key]);
      nums = [...nums, ...res];
    } else if (typeof obj[key] === 'number') {
      nums.push(obj[key]);
    }
  }
  return nums;
};
