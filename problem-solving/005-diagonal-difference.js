// Node.js
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let diagonalL2R = [];
    let diagonalR2L = [];
    for (var r = 0, len = arr.length; r < len; r++) {
        diagonalL2R.push(arr[r][r]);
        diagonalR2L.push(arr[r][(len-1)-r]);
    }
    const sumDiagonalL2R = diagonalL2R.reduce((a, b) => a + b);
    const sumDiagonalR2L = diagonalR2L.reduce((a, b) => a + b);
    return Math.abs(sumDiagonalL2R - sumDiagonalR2L);
}
