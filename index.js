import array from './src/array.js';
import { binerySearch } from './src/binerySearch.js';
import { climbingStairs } from './src/climbingStairs.js';
import { nestedObjEmployeeDetails } from './src/data.js';
import linkedList from './src/linkedList.js';
import {
  reverseRowMatrix,
  rotateMatrix,
  swapColumnsMatrix,
  swapRowsMatrix,
  transposeMatrix,
  traversingMatrix,
} from './src/matrix.js';
import { mergeSort } from './src/mergeSort.js';
import {
  factorialRecurion,
  fibonacciRecursion,
  findEmployeePosition,
} from './src/recursion.js';
import {
  longestSubstringLengthWithoutRepeatingChars,
  maxSumSubarray,
  subarrayWithGivenSum,
} from './src/slidingWindow.js';
import { isPalondrome, reverseArray } from './src/twoPointers.js';

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

const fib = fibonacciRecursion(5);
console.log(fib);
