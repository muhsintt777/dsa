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

export const swapColumnsMatrix = () => {
  const matrix = [
    [1, 22, 3],
    [45, 5, 56],
    [7, 85, 59],
  ];
  displayMatrix(matrix);

  const c1 = 0;
  const c2 = 1;
  for (let i = 0; i < matrix.length; i++) {
    [matrix[i][c1], matrix[i][c2]] = [matrix[i][c2], matrix[i][c1]];
  }

  displayMatrix(matrix);
};

export const transposeMatrix = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 62],
  ];
  displayMatrix(matrix);

  const newMatrix = [];
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < col; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < row; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  displayMatrix(newMatrix);
};
