// Node.js
// Complete the plusMinus function below.
function plusMinus(arr) {
    let zeroes = 0;
    let positives = 0;
    let negatives = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > 0) {
            positives++;
        }
        else if (arr[i] < 0) {
            negatives++;
        }
        else {
            zeroes++;
        }
    }
    const positiveRatio = Number.parseFloat(positives / arr.length).toFixed(6);
    const negativeRatio = Number.parseFloat(negatives / arr.length).toFixed(6);
    const zeroRatio = Number.parseFloat(zeroes / arr.length).toFixed(6);
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}
