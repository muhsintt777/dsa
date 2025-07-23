export const traversingMatrix = (matrix) => {
  matrix = matrix ?? [
    [1, 22, 3],
    [45, 5, 56],
    [7, 85, 59],
  ];

  const rowLimit = matrix.length;
  for (let i = 0; i < rowLimit; i++) {
    const colLimit = matrix[i].length;
    for (let j = 0; j < colLimit; j++) {
      console.log(matrix[i][j]);
    }
  }
};

export const displayMatrix = (matrix) => {
  const rowLimit = matrix.length;
  for (let i = 0; i < rowLimit; i++) {
    console.log(matrix[i]);
  }
  console.log('---');
};

export const reverseRowMatrix = () => {
  const matrix = [
    [1, 22, 3],
    [45, 5, 56],
    [7, 85, 59],
  ];
  displayMatrix(matrix);

  const rowToReverse = 2;

  const rowLimit = matrix.length;
  for (let i = 0; i < rowLimit; i++) {
    if (i === rowToReverse) {
      matrix[i].reverse();
    }
  }
  displayMatrix(matrix);
};

export const swapRowsMatrix = () => {
  const matrix = [
    [1, 22, 3],
    [45, 5, 56],
    [7, 85, 59],
  ];
  displayMatrix(matrix);

  const r1 = 0;
  const r2 = 2;

  [matrix[r1], matrix[r2]] = [matrix[r2], matrix[r1]];
  displayMatrix(matrix);
};
