// Node.js
// Complete the countApplesAndOranges function below.
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
