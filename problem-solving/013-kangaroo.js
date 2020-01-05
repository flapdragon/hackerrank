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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    // If kangaroo 1 is ahead of and faster than kangaroo 2, or vice versa
    if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
        console.log('NO');
        return 'NO';
    }
    // If the kangaroos are the same speed but start at different locations
    else if ((x1 > x2 && v1 === v2) || (x2 > x1 && v1 === v2)) {
        console.log('NO');
        return 'NO';
    }
    // Am I overthinking this?
    else {
        let kangaroo1 = x1;
        let kangaroo2 = x2;
        for (let i = 0; i < 1000000; i++) {
            kangaroo1 += v1;
            kangaroo2 += v2;
            if (kangaroo1 === kangaroo2) {
                console.log('YES');
                return 'YES';
                break;
            }
        }
        console.log('NO');
        return 'NO';
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
