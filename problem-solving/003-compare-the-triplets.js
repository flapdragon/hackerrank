// Node.js
// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] > b[i]) {
            pointsA++;
        }
        if (a[i] < b[i]) {
            pointsB++;
        }
    }
    console.log([ pointsA, pointsB ]);
    return [ pointsA, pointsB ];
}

compareTriplets([5, 6, 7], [3, 6, 10]);
