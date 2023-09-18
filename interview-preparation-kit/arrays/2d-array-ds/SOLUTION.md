# 2D Array - DS Solution

It's a simple problem so I just did brute force, iterating by x and y. You could avoid looping by just hard-coding the array indeces since it's always **6 x 6** but it seems like if we're going to go to all this trouble then we should write some code that does something and works for **n x n** size arrays.

```
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
```
