// Node.js
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // Create a map of sock colors and their counts
  let sockColors = new Map()
  for (let i = 0, len = ar.length; i < len; i++) {
    sockColors.set(ar[i], (sockColors.get(ar[i]) || 0) + 1)
  }

  // Find total pairs by color
  let pairs = 0
  for (let [num, count] of sockColors.entries()) {
    pairs += Math.floor(count / 2)
  }
  console.log('pairs', pairs)
  return pairs
}

// Test cases
sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ])
sockMerchant(15, [ 6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5 ])
