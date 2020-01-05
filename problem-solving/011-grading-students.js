// Node.js
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
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
