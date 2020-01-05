// Node.js
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
