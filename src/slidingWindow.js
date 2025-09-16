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

export const longestSubstringLengthWithoutRepeatingChars = () => {
  const str = 'wwwabcdttt';
  let leftIndex = 0;
  let maxLength = 0;
  let longestSubstring = '';
  const lastseen = new Map();

  for (let right = 0; right < str.length; right++) {
    const ch = str[right];

    if (lastseen.has(ch) && lastseen.get(ch) >= leftIndex) {
      leftIndex = lastseen.get(ch) + 1;
    }

    lastseen.set(ch, right);

    const newLength = right - leftIndex + 1;
    if (newLength > maxLength) {
      maxLength = newLength;
      longestSubstring = str.substring(leftIndex, right + 1);
    }
  }

  console.log('result-- ', maxLength);
  console.log('longestSubstring-- ', longestSubstring);
};
