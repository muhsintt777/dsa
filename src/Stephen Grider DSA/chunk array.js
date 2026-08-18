function chunk(array, size) {
  const res = [];

  let arr = [];
  for (let n of array) {
    arr.push(n);
    if (arr.length === size) {
      res.push([...arr]);
      arr = [];
    }
  }
  if (arr.length) res.push([...arr]);

  return res;
}

function chunk2(arr, size) {
  const res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i + size));
    i = i + size;
  }
  return res;
}
