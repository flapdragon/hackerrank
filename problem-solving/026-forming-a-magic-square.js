// Node.js
// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  // I guess you just have to hard code this shit. I can't figure out how to do
  // this mathematically. I know there's a way but my guess is it involves
  // comparing multiple values at a time.
  // TODO: Come back and figure that out. Possibly for n x n.
  const allPossibleSquares = [
    [ [8, 1, 6], [3, 5, 7], [4, 9, 2] ],
    [ [6, 1, 8], [7, 5, 3], [2, 9, 4] ],
    [ [4, 9, 2], [3, 5, 7], [8, 1, 6] ],
    [ [2, 9, 4], [7, 5, 3], [6, 1, 8] ],
    [ [8, 3, 4], [1, 5, 9], [6, 7, 2] ],
    [ [4, 3, 8], [9, 5, 1], [2, 7, 6] ],
    [ [6, 7, 2], [1, 5, 9], [8, 3, 4] ],
    [ [2, 7, 6], [9, 5, 1], [4, 3, 8] ]
  ]
  const squareSize = s[0].length
  let allCosts = []
  for (let i = 0, len = allPossibleSquares.length; i < len; i++) {
    const square = allPossibleSquares[i]
    let cost = 0
    for (let j = 0, len = squareSize; j < len; j++) {
      for (let k = 0, len = squareSize; k < len; k++) {
        if (s[j][k] !== square[j][k]) {
          cost += Math.abs(s[j][k] - square[j][k])
        }
      }
    }
    console.log('cost', cost)
    allCosts.push(cost)
  }
  console.log('Math.min.apply(Math, allCosts)', Math.min.apply(Math, allCosts))
  return Math.min.apply(Math, allCosts)
}
formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ])
formingMagicSquare([ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ])
formingMagicSquare([ [ 4, 5, 8 ], [ 2, 4, 1 ], [ 1, 9, 7 ] ]) // Test case 1, answer: 14
formingMagicSquare([ [ 2, 9, 8 ], [ 4, 2, 7 ], [ 5, 6, 7 ] ]) // Test case 2, answer: 21
formingMagicSquare([ [ 4, 4, 7 ], [ 3, 1, 5 ], [ 1, 7, 9 ] ]) // Test case 3, answer: 20


// Attempt 2. Basically trying to compare the sums of each row against the
// magic constant for some reason. It worked for the examples, but not for
// reality.
// function formingMagicSquare(s) {
//   const squareSize = s[0].length
//   // The magic constant seems to be 15 but a 3x3 square of 1s would also be
//   // valid so ...
//   let magicConstant = 15
//   let diffsHorizontal = []
//   let sumsHorizontal = 0
//   let diffsVertical = []
//   let sumsVertical = 0
//   // Iterate horizontally
//   for (let i = 0, len = squareSize; i < len; i++) {
//     console.log(`sum ${s[i]}`, s[i].reduce((a, b) => a + b))
//     sumsHorizontal += s[i].reduce((a, b) => a + b)
//     const diff = Math.abs(magicConstant - s[i].reduce((a, b) => a + b))
//     const diff02 = s[i].reduce((a, b) => a + b) - magicConstant
//     diffsHorizontal.push(diff)
//     let sumVerticalRow = 0
//     for (let j = 0, len = squareSize; j < len; j++) {
//       // console.log('i', i, 'j', j)
//       sumVerticalRow += s[j][i]
//     }
//     sumsVertical += sumVerticalRow
//     console.log('sumVerticalRow', sumVerticalRow)
//     diffsVertical.push(Math.abs(magicConstant - sumVerticalRow))
//     // diffsVertical.push(sumVerticalRow - magicConstant)
//   }
//   console.log('diffsHorizontal', diffsHorizontal)
//   console.log('sumsHorizontal', sumsHorizontal)
//   console.log('diffsVertical', diffsVertical)
//   console.log('sumsVertical', sumsVertical)
//   console.log('sum all', diffsHorizontal.reduce((a, b) => a + b) + diffsVertical.reduce((a, b) => a + b))
//   console.log(Math.max(diffsHorizontal.reduce((a, b) => a + b), diffsVertical.reduce((a, b) => a + b)))
//   return Math.max(diffsHorizontal.reduce((a, b) => a + b), diffsVertical.reduce((a, b) => a + b))
// }


// Original attempt
// My original problem with this challenge is that I was thinking that I needed
// to solve it as well as calculate the cost. Writing code to solve this
// challenge would be significantly more difficult. So I guess I was going on
// what was implied rather than what was actually written.
// function formingMagicSquare(s) {
//   const cubeSize = s[0].length
//   let magicConstant = 0
//   let sums = []
//   // Horizontal sums
//   let sumsHorizontal = []
//   for (let i = 0, len = cubeSize; i < len; i++) {
//     const sum = s[i].reduce((a, b) => a + b)
//     // if (sum)
//     sumsHorizontal.push(sum)
//   }
//   sums.push(sumsHorizontal)
//   // Vertical sums
//   let sumsVertical = []
//   let sumVerticalRow = 0
//   for (let i = 0, len = cubeSize; i < len; i++) {
//     for (let j = 0, len = cubeSize; j < len; j++) {
//       // console.log('i', i, 'j', j)
//       sumVerticalRow += s[j][i]
//     }
//     sumsVertical.push(sumVerticalRow)
//     // Reset sum
//     sumVerticalRow = 0
//   }
//   sums.push(sumsVertical)
//   // Diagonal sums
//   // This can definitely be one loop but my brain
//   let sumsDiagonal = []
//   let sumDiagonalRowLR = 0
//   let sumDiagonalRowRL = 0
//   for (let i = 0, len = cubeSize; i < len; i++) {
//     sumDiagonalRowLR += s[i][i]
//     sumDiagonalRowRL += s[cubeSize-1][cubeSize-1]
//   }
//   sumsDiagonal = [ sumDiagonalRowRL, sumDiagonalRowLR ]
//   sums.push(sumsDiagonal)
//   console.log('sums', sums)
// }
