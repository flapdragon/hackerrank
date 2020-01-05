// Node.js
// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let breakHigh = 0;
    let breakLow = 0;
    let currentHigh = scores[0];
    let currentLow = scores[0];
    for (let i = 1, len = scores.length; i < len; i++) {
      if (scores[i] > currentHigh) {
        breakHigh++;
        currentHigh = scores[i];
      }
      else if (scores[i] < currentLow) {
        breakLow++;
        currentLow = scores[i];
      }
    }
    console.log(breakHigh, breakLow);
    return [breakHigh, breakLow];
}

breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]);
breakingRecords([ 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503, 503 ]);
