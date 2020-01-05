// Node.js
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
    // Get max/highest candle
    // console.log(Math.max.apply(Math, arr));
    const maxCandle = Math.max(...arr);
    // Count max height candles
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == maxCandle) {
            count++;
        }
    }
    return count;
}
