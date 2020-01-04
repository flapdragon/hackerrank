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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
/******************** MY CODE BEGIN ********************/
function timeConversion(s) {
    // shoot i forgot about 12
    const timeArray = s.split(":");
    if (s.slice(-2).toLowerCase() == 'pm') {
        // Convert to array
        if (timeArray[0] == 12) {
            // Remove PM and return
            return timeArray.join(":").slice(0, -2);
        }
        else {
            // Add 12 to hours
            timeArray[0] = parseInt(timeArray[0], 10) + 12;
            // Remove PM and return
            return timeArray.join(":").slice(0, -2);
        }
    }
    else {
        if (timeArray[0] == 12) {
            // Subtract 12 hours
            timeArray[0] = '00';
            // Remove AM and return
            return timeArray.join(":").slice(0, -2);
        }
        // Remove AM and return
        return s.slice(0, -2);
    }
}
/******************** MY CODE END ********************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
