// Node.js
/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  console.log(keyboards, drives, b)
  // I had this min checker first because I thought I would be cool and save
  // time but it averaged about .151ms and just adding that logic to the return
  // saved all that time.
  // const minKeyboard = Math.min.apply(null, keyboards)
  // const minDrive = Math.min.apply(null, drives)
  // if (minKeyboard + minDrive > b) {
  //   console.log(-1)
  //   return -1
  // }

  let maxCombo = 0
  for (let i = 0, len = keyboards.length; i < len; i++) {
    for (let j = 0, len = drives.length; j < len; j++) {
      const currentCombo = keyboards[i] + drives[j]
      maxCombo = currentCombo > maxCombo && currentCombo <= b ? currentCombo : maxCombo
    }
  }
  console.log(maxCombo > 0 ? maxCombo : -1)
  return maxCombo > 0 ? maxCombo : -1
}

getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10)
getMoneySpent([ 4 ], [ 5 ], 5)
