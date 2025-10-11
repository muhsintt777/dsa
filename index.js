import {
  fibonacciRecursion,
  sumOfArrayRecursion,
  sumOfNestedObjectNums,
} from './src/recursion.js';

console.log('---');

// linkedList();
// traversingMatrix();
// reverseRowMatrix();
// swapRowsMatrix();
// swapColumnsMatrix();
// transposeMatrix();
// rotateMatrix();

// reverseArray();
// isPalondrome();
// maxSumSubarray();
// longestSubstringLengthWithoutRepeatingChars();
// binerySearch();

// const arr = [4, 3, 2, 5, 1, 6];
// const compare = (a, b) => a - b;
// const result = mergeSort(arr, compare);
// console.log('result-- ', result);

// subarrayWithGivenSum();

// climbingStairs();

// const position = findEmployeePosition(nestedObjEmployeeDetails, 'Kevin');
// console.log('position--', position);

// const fac = factorialRecurion(7);
// console.log(fac);

// const fib = fibonacciRecursion(5);
// console.log(fib);

// const sumArr = sumOfArrayRecursion([2, 5, 3, 11]);
// console.log('sum', sumArr);

const nestedNumObj = {
  a: 1,
  b: {
    t: 'ee',
    c: 2,
    d: {
      e: 2,
      f: 5,
      h: {
        k: 2,
        l: 2,
        e: 'e',
      },
    },
  },
  g: 1,
};
const nestedSum = sumOfNestedObjectNums(nestedNumObj);
console.log(nestedSum);
