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
