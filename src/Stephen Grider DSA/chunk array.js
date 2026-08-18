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
