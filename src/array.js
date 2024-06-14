let myFunc = () => {};

const arr = [
  6, 4, 14, 4, 24, 4, 34, 4, 4, 4, 4, 1, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 54, 11, 4, 14, 14,
];
// for (let a = 0; a < 100000; a++) {
//   arr.unshift(3);
// }
const target = 4;

function findTargetSum() {
  const startTime = Date.now();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i], arr[j]);
        const foundTime = Date.now();
        console.log("time: ", foundTime - startTime);
        return;
      }
    }
  }
  console.log("target not found");
}

function findTargetSumWithSet() {
  const startTime = Date.now();
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    const match = target - currNum;
    if (set.has(match)) {
      const foundTime = Date.now();
      console.log(currNum, match);
      console.log("time", foundTime - startTime);
      return;
    } else {
      set.add(currNum);
    }
  }
  console.log("not found");
}

function switchArrayValues() {
  let lastAvailableIndex = arr.length - 1;
  for (let j = lastAvailableIndex; j >= 0; j--) {
    if (arr[j] !== target) {
      lastAvailableIndex = j;
      break;
    }
  }
  for (let i = 0; i <= lastAvailableIndex; i++) {
    if (arr[i] === target) {
      let temp = arr[i];
      arr[i] = arr[lastAvailableIndex];
      arr[lastAvailableIndex] = temp;
      lastAvailableIndex--;
    }
  }
  console.log(arr);
}

myFunc = switchArrayValues;
// myFunc = findTargetSumWithSet;
// myFunc = findTargetSum;

export default myFunc;
