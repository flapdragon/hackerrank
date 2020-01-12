// Node.js
// My approach was to check for going back UP 'U' to sea level from -1 and
// using that event as the count of valleys. Checking the internet afterwards I
// see that many other people also did this. Also could check for going down 'D'
// below to -1.
// Complete the countingValleys function below.
function countingValleys(n, s) {
  let currentLevel = 0
  let valleyCount = 0
  const stepArray = s.split('')
  for (let i = 0, len = stepArray.length; i < len; i ++) {
    if (stepArray[i] === 'U') {
      if (currentLevel == -1) {
        valleyCount++
      }
      currentLevel++
    }
    else {
      currentLevel--
    }
  }
  console.log('valleyCount', valleyCount)
  return valleyCount
}

countingValleys(8, 'UDDDUDUU')
