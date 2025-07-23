export const traversingMatrix = () => {
  const matrix = [
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
