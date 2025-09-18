export const mergeSort = (arr = [], compare) => {
  // console.log('arr', arr);

  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compare);
  const rigth = mergeSort(arr.slice(mid), compare);

  return merge(left, rigth, compare);
};

function merge(left = [], right = [], compare) {
  // console.log(left, right);

  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}
