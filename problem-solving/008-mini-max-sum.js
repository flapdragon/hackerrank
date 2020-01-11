// Node.js
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const minArray = sortedArray.slice(0, 4);
  const maxArray = sortedArray.slice(arr.length - 4, arr.length);
  const minSum = minArray.reduce((a, b) => a + b);
  const maxSum = maxArray.reduce((a, b) => a + b);
  console.log(`${minSum} ${maxSum}`);
}
