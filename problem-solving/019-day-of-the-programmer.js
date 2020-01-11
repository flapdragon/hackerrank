// Node.js
// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  let date = new Date(`January 1, ${year} 00:00:00`)
  // Only add 255 because we're already on 1
  date.setDate(date.getDate() + 255)
  // console.log('date', date)
  // Julian
  if (year > 1918) {
    // hard code this? it will literally always be september
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    console.log(`${date.getDate()}.${month}.${year}`)
    return `${date.getDate()}.${month}.${year}`
  }
  // 1918
  else if (year == 1918) {
    // it sounds like we just add 13 days? hard coded?
    console.log('26.09.1918')
    return '26.09.1918'
  }
  // Gregorian, code goes and lives alone in the forest
  else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 || year % 4 === 0) {
      console.log(`12.09.${year}`)
      return `12.09.${year}`
    }
    else {
      console.log(`13.09.${year}`)
      return `13.09.${year}`
    }
  }
}


// test cases
dayOfProgrammer(1700)
dayOfProgrammer(1756)
dayOfProgrammer(1800)
dayOfProgrammer(1801)
dayOfProgrammer(1917)
dayOfProgrammer(1918)
dayOfProgrammer(2015)
dayOfProgrammer(2016)
dayOfProgrammer(2017)
dayOfProgrammer(2018)
dayOfProgrammer(2019)
dayOfProgrammer(2000)
dayOfProgrammer(2020)
dayOfProgrammer(2100)
dayOfProgrammer(2200)
dayOfProgrammer(2201)
dayOfProgrammer(2204)
dayOfProgrammer(2400)
dayOfProgrammer(2500)
