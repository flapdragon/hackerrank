/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Array is always 6 x 6
  // Just gonna go for it - brute force.
  // Need to set max to a really low number, probably safe enough to use negative one billion rather than negative Number.MAX_VALUE
  let max = -1000000000
  let hourglass
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      // Hourglass
      hourglass = arr[x][y] + arr[x][y + 1] + arr[x][y + 2] // row 1
      hourglass += arr[x + 1][y + 1] // row 2
      hourglass += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2] // row 3
      // Bigger than current max?
      max = hourglass > max ? hourglass : max
      // Reset hourglass
      hourglass = 0
    }
  }
  return max
}

console.log("0:", hourglassSum([[1, 1, 1, 0, 0, 0 ],
  [0, 1, 0, 0, 0, 0 ],
  [1, 1, 1, 0, 0, 0 ],
  [0, 0, 2, 4, 4, 0 ],
  [0, 0, 0, 2, 0, 0 ],
  [0, 0, 1, 2, 4, 0 ]]))
console.log("1:", hourglassSum([[1, 1, 1, 0, 0, 0 ],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]]))
console.log("2:", hourglassSum([[9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]]))
console.log("3:", hourglassSum([[-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]]))
