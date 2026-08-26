function matrix(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  let rowStart = 0;
  let rowLimit = n;
  let colStart = 0;
  let colLimit = n;

  let count = 1;

  while (rowStart < rowLimit && colStart < colLimit) {
    for (let i = colStart; i < colLimit; i++) {
      res[rowStart][i] = count;
      count++;
    }
    rowStart++;

    for (let j = rowStart; j < rowLimit; j++) {
      res[j][rowLimit - 1] = count;
      count++;
    }
    colLimit--;

    for (let k = colLimit - 1; k >= colStart; k--) {
      res[rowLimit - 1][k] = count;
      count++;
    }
    rowLimit--;

    for (let l = rowLimit - 1; l >= rowStart; l--) {
      res[l][colStart] = count;
      count++;
    }
    colStart++;
  }
}
