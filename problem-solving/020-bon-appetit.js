// Node.js
// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  // Get sum of all items except the allergic one, divide by 2
  const amountOwed = bill.reduce((acc, value, i) => i != k ? acc + value : acc) / 2
  if (amountOwed == b) {
    console.log('Bon Appetit')
    return 'Bon Appetit'
  }
  else {
    console.log(b - amountOwed)
    return b - amountOwed
  }
}

// test cases
bonAppetit([ 3, 10, 2, 9 ], 1, 12)
