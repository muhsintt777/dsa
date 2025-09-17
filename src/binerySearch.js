export const binerySearch = () => {
  // const arr = [1, 3, 5, 6, 8, 9, 22, 44, 76, 86, 89, 96, 99];
  const arr = [1, 3, 5, 6, 8, 9, 11];
  const target = 5;

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    console.log('mid', mid);
    const val = arr[mid];

    if (val === target) {
      console.log('result', val);
      break;
    } else if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
