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

export const subarrayWithGivenSum = () => {
  const arr = [2, 2, 1, 2, 6];
  const target = 8;

  let leftIndex = 0;
  let rightIndex = 1;
  let windowSum = arr[0];

  if (windowSum == target) {
    console.log('result-- ', 0, 0);
    return;
  }

  while (rightIndex < arr.length) {
    const sum = windowSum + arr[rightIndex];
    if (sum === target) {
      console.log('result-- ', leftIndex, rightIndex);
      return;
    } else if (sum < target) {
      windowSum += arr[rightIndex];
      rightIndex++;
    } else if (sum > target) {
      windowSum -= arr[leftIndex];
      leftIndex++;
    }
  }
};

export const longestSubstringWithKUniqueChars = () => {
  const s = 'abcde';
  const k = 3;

  let left = 0;
  let right = 0;
  let maxL = 0;
  const map = new Map();

  while (right < s.length) {
    const curr = s[right];
    const currCount = map.get(curr) || 0;
    map.set(curr, currCount + 1);
    right++;

    while (map.size > k) {
      const leftChar = s[left];
      const newCount = map.get(leftChar) - 1;
      if (newCount === 0) {
        map.delete(leftChar);
      } else {
        map.set(leftChar, newCount);
      }
      left++;
    }

    const newLength = right - left;
    console.log(maxL, newLength);
    maxL = Math.max(maxL, right - left);
  }

  console.log('result: ', maxL);
};
