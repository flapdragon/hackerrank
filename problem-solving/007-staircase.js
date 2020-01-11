// Node.js
// Complete the staircase function below.
function staircase(n) {
    const zeroBasedLength = n - 1;
    for (let i = 0, len = n; i < len; i++) {
        // let spaces = Array(12 + 1).join(" ")
        // make 1 based fit with 0 based
        const spaces = " ".repeat(n - (i + 1))
        const pounds = "#".repeat(i + 1)
        console.log(`${spaces}${pounds}`)
    }
}
