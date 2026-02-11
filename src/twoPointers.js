export const reverseArray = () => {
  const arr = [4, 35, 6, 3, 63];
  console.log('arr-', arr);

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    console.log(leftIndex, rightIndex);

    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }

  console.log('result-', arr);
};

export const isPalondrome = () => {
  let word = 'car';

  word = word.toLowerCase();

  let left = 0;
  let right = word.length - 1;

  let isPalondrome = true;
  while (left <= right) {
    if (word[left] !== word[right]) {
      isPalondrome = false;
      break;
    }
    left++;
    right--;
  }
  console.log('result=> ', isPalondrome);
};

// Two sum II
export const twoSumII = () => {
  const numbers = [-5, 7, 11, 15];
  const target = 10;

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currLeft = numbers[left];
    const currRight = numbers[right];
    const sum = currLeft + currRight;
    if (sum === target) {
      console.log('res', left, right);
      break;
    }
    if (sum < target) {
      left++;
      continue;
    }
    if (sum > target) {
      right--;
      continue;
    }
  }
};
