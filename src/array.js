let myFunc = () => {};

const arr = [
  6, 4, 14, 4, 24, 4, 34, 4, 4, 4, 4, 1, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 54, 11, 4, 14, 14,
];
// for (let a = 0; a < 100000; a++) {
//   arr.unshift(3);
// }
const target = 54;

function findTargetSumWithSet() {
  const startTime = Date.now();
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    const match = target - currNum;
    if (set.has(match)) {
      const foundTime = Date.now();
      console.log(currNum, match);
      console.log('time', foundTime - startTime);
      return;
    } else {
      set.add(currNum);
    }
  }
  console.log('not found');
}

function switchArrayValues() {
  let lastIndex = arr.length - 1;
  let currentIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (lastIndex === currentIndex) break;
    if (arr[currentIndex] === target && arr[lastIndex] !== target) {
      const temp = arr[currentIndex];
      arr[currentIndex] = arr[lastIndex];
      arr[lastIndex] = temp;

      lastIndex--;
      currentIndex++;
    } else if (arr[lastIndex] === target) {
      lastIndex--;
    } else if (arr[currentIndex] !== target) {
      currentIndex++;
    }
  }
  console.log(arr);
}

// myFunc = switchArrayValues;
// myFunc = findTargetSumWithSet;
// myFunc = findTargetSum;

export default myFunc;
