function addMatrices(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions.");
    }

    return matrixA.map((row, i) => row.map((value, j) => value + matrixB[i][j]));
}

function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function sumDiagonals(matrix) {
    const n = matrix.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];
    }

    return [primaryDiagonalSum, secondaryDiagonalSum];
}

const matrixA = [[1, 3], [1, 4]];
const matrixB = [[4, 1], [2, 2]];
console.log("Matrices sum:", addMatrices(matrixA, matrixB));

const matrixC = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Transposed matrix:", transposeMatrix(matrixC));

console.log("Diagonal sums:", sumDiagonals(matrixC));
