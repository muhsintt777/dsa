import { nestedNumObj } from './src/data.js';
import {
  collectAllNumsInNestedObj,
  countNestedObjKeys,
  fibonacciRecursion,
  findValueInNestedObj,
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

// const nestedSum = sumOfNestedObjectNums(nestedNumObj);
// console.log(nestedSum);

// const keyCount = countNestedObjKeys(nestedNumObj);
// console.log(keyCount);

// const val = findValueInNestedObj(nestedNumObj, 'k');
// console.log(val);

const numsArr = collectAllNumsInNestedObj(nestedNumObj);
console.log(numsArr);
