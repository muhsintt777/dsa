export const transverseMatrix = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const rowLimit = matrix.length;
  for (let i = 0; i < rowLimit; i++) {
    const colLimit = matrix[i].length;
    for (let j = 0; j < colLimit; j++) {
      console.log(matrix[i][j]);
    }
  }
};
