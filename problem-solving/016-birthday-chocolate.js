// Complete the birthday function below.
function birthday(s, d, m) {
  let chocolateDivisions = 0
  // Loop over chocolate array, from 0 to m - 1 from the end
  for (let i = 0, len = s.length - (m - 1); i < len; i++) {
    // If the sum of m number of chocolate array pieces == birth day
    if (s.slice(i, i + m).reduce((a, b) => a + b) == d) {
      chocolateDivisions++
    }
  }
  console.log('chocolateDivisions', chocolateDivisions)
  return chocolateDivisions
}

birthday([ 1, 2, 1, 3, 2 ], 3, 2)
birthday([ 1, 1, 1, 1, 1, 1 ], 3, 2)
birthday([ 4 ], 4, 1)
birthday([ 2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1 ], 18, 7)
