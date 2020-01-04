'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
/******************** MY CODE BEGIN ********************/
function gradingStudents(grades) {
    for (let i = 0, len = grades.length; i < len; i++) {
        const nextMultipleOfFiveUp = Math.ceil(grades[i] / 5) * 5;
        console.log(nextMultipleOfFiveUp);
        if (grades[i] > 37 && (nextMultipleOfFiveUp - grades[i]) < 3) {
            grades[i] = nextMultipleOfFiveUp;
        }
    }
    return grades;
}
/******************** MY CODE END ********************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
