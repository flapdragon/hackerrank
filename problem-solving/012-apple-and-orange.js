'use strict';

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

// Complete the countApplesAndOranges function below.
/******************** MY CODE BEGIN ********************/
// really? i have to check that it doesn't roll PAST the house? a mention of the gravity system we're talking about here would have been helpful.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let houseApples = 0;
    let houseOranges = 0;
    for (let i = 0, len = apples.length; i < len; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) {
            houseApples++;
        }
    }
    for (let i = 0, len = oranges.length; i < len; i++) {
        if (oranges[i] + b <= t && oranges[i] + b >= s) {
            houseOranges++;
        }
    }
    // return `${houseApples} ${houseOranges}`;
    console.log(houseApples);
    console.log(houseOranges);
}
/******************** MY CODE BEGIN ********************/

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
