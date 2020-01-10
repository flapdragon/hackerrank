// Node.js

// version 3
// ok now i understand the question. i assumed i < j to be ar[i] < ar[j] because
// i hardly ever compare indexes irl, it's always values, but this is all
// hypothetical so ... anyway checking for ar[i] < ar[j], unfortunately has
// very similar results.
// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let matchingPairs = []
  // Loop over each array element
  for (let i = 0, len = n; i < len; i++) {
    // And compare it to all of the other elements after it so that i < j
    for (let j = i + 1, len = n; j < len; j++) {
      const elementI = ar[i]
      const elementJ = ar[j]
      // If the sum of i + j is evenly divisble by k, ar[i] % ar[j] % k == 0
      if ((elementI + elementJ) % k == 0) {
        matchingPairs.push([ elementI, elementJ ])
      }
    }
  }
  console.log('matchingPairs.length', matchingPairs.length)
  return matchingPairs.length
}

divisibleSumPairs(6, 3, [ 1, 3, 2, 6, 1, 2 ])
divisibleSumPairs(100, 22, [ 43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71 ])
divisibleSumPairs(100, 66, [ 50, 44, 77, 66, 70, 58, 9, 59, 74, 82, 87, 15, 10, 95, 10, 81, 2, 4, 87, 85, 28, 96, 76, 18, 86, 91, 94, 59, 19, 58, 98, 48, 38, 70, 36, 38, 66, 9, 72, 54, 23, 23, 17, 18, 8, 16, 9, 56, 12, 59, 73, 31, 10, 62, 83, 84, 28, 91, 29, 22, 73, 22, 3, 75, 26, 31, 93, 57, 15, 32, 46, 74, 99, 10, 15, 58, 60, 53, 41, 49, 71, 59, 4, 20, 38, 78, 1, 94, 76, 5, 70, 68, 42, 34, 77, 28, 19, 25, 20, 15 ])



// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  // version 1
  // TODO: 8/20 test cases are still failing. i get 215 when 216 is expected.
  console.time('straightloops')
  let matchingPairs = []
  // Loop over each array element
  for (let i = 0, len = n; i < len; i++) {
    // And compare it to all of the other elements
    for (let j = 0, len = n; j < len; j++) {
      const elementI = ar[i]
      const elementJ = ar[j]

      // debugging
      if ((elementI + elementJ) % k == 0) {
        // console.log('i', i, 'ari', elementI, 'j', j, 'arj', elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, matchingPairs.length)
        console.log(`ari[${i}]`, elementI, `arj[${j}]`, elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, elementI == elementJ ? '===' : '!==', matchingPairs.length)
      }

      // ar[i] < ar[j]
      // ar[i] % ar[j] % k == 0
      // i != j
      if ((j != i) && (elementI < elementJ) && ((elementI + elementJ) % k == 0)) {
        // console.log(i, elementI, j, elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, matchingPairs.length + 1)
        // console.log('i', i, 'ari', elementI, 'j', j, 'arj', elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, matchingPairs.length)
        matchingPairs.push([ elementI, elementJ ])
      }
    }
  }
  console.timeEnd('straightloops')
  // console.log('matchingPairs', matchingPairs)
  console.log('matchingPairs.length', matchingPairs.length)
}

divisibleSumPairs(6, 3, [ 1, 3, 2, 6, 1, 2 ])
divisibleSumPairs(100, 22, [ 43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71 ])
divisibleSumPairs(100, 66, [ 50, 44, 77, 66, 70, 58, 9, 59, 74, 82, 87, 15, 10, 95, 10, 81, 2, 4, 87, 85, 28, 96, 76, 18, 86, 91, 94, 59, 19, 58, 98, 48, 38, 70, 36, 38, 66, 9, 72, 54, 23, 23, 17, 18, 8, 16, 9, 56, 12, 59, 73, 31, 10, 62, 83, 84, 28, 91, 29, 22, 73, 22, 3, 75, 26, 31, 93, 57, 15, 32, 46, 74, 99, 10, 15, 58, 60, 53, 41, 49, 71, 59, 4, 20, 38, 78, 1, 94, 76, 5, 70, 68, 42, 34, 77, 28, 19, 25, 20, 15 ])



// version 2 with sorting
function divisibleSumPairsWithSorting(n, k, ar) {
  console.time('sortedloops')
  let matchingPairs = []
  const sortedAr = ar.sort((a, b) => a - b)
  // Loop over each array element
  for (let i = 0, len = n; i < len; i++) {
    // And compare it left to right from i + 1
    for (let j = i + 1, len = n; j < len; j++) {
      const elementI = sortedAr[i]
      const elementJ = sortedAr[j]
      // console.log('i', i, 'ari', elementI, 'j', j, 'arj', elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, matchingPairs.length)
      // console.log(`ari[${i}]`, elementI, `arj[${j}]`, elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, matchingPairs.length)
      //
      // debugging for test case 7
      if ((elementI + elementJ) % k == 0) {
        // console.log('i', i, 'ari', elementI, 'j', j, 'arj', elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, matchingPairs.length)
        // console.log(`ari[${i}]`, elementI, `arj[${j}]`, elementJ, elementI + elementJ, (elementI + elementJ) % k == 0, elementI < elementJ, matchingPairs.length)
      }

      // ar[i] != ar[j], we know it won't be >
      // ar[i] % ar[j] % k == 0
      if (elementI < elementJ && (elementI + elementJ) % k == 0) {
        matchingPairs.push([ elementI, elementJ ])
      }
    }
  }
  console.timeEnd('sortedloops')
  // console.log('matchingPairs', matchingPairs)
  console.log('matchingPairs.length', matchingPairs.length)
}

// divisibleSumPairsWithSorting(6, 3, [ 1, 3, 2, 6, 1, 2 ])
// divisibleSumPairsWithSorting(100, 22, [ 43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71 ])
// divisibleSumPairsWithSorting(100, 66, [ 50, 44, 77, 66, 70, 58, 9, 59, 74, 82, 87, 15, 10, 95, 10, 81, 2, 4, 87, 85, 28, 96, 76, 18, 86, 91, 94, 59, 19, 58, 98, 48, 38, 70, 36, 38, 66, 9, 72, 54, 23, 23, 17, 18, 8, 16, 9, 56, 12, 59, 73, 31, 10, 62, 83, 84, 28, 91, 29, 22, 73, 22, 3, 75, 26, 31, 93, 57, 15, 32, 46, 74, 99, 10, 15, 58, 60, 53, 41, 49, 71, 59, 4, 20, 38, 78, 1, 94, 76, 5, 70, 68, 42, 34, 77, 28, 19, 25, 20, 15 ])


// Look, I know you probably get this all the time, and I will definitely check my code more, but I think some of your test cases may be wrong. For test case 7, the output or count is supposed to be 69, but i think it should be 68. To get to 69 you have to count 66 + 66,
