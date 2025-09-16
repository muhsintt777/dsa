export const maxSumSubarray = () => {
  const arr = [2, 4, 5, 6, 7, 8, 9];
  const size = 3;

  let maxSum = 0;

  // find 1st window sum
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  // slide the window
  for (let i = size; i < arr.length; i++) {
    const newSum = maxSum + arr[i] - arr[i - size];
    if (newSum > maxSum) {
      maxSum = newSum;
    }
  }
  console.log('result-- ', maxSum);
};
