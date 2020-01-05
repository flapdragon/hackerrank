// Node.js
/*
 * Complete the timeConversion function below.
 */
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
