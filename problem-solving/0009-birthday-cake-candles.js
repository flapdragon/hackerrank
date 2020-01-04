'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
/******************** MY CODE BEGIN ********************/
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
/******************** MY CODE END ********************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
