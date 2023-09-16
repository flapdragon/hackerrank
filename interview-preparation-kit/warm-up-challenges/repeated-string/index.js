function repeatedString(s, n) {
  let total = 0
  
  // How many a in s
  const a = [...s.matchAll(/a/g)]
  
  // How many s in n
  const reps = n / s.length
  const remainder = n % s.length

  if (remainder === 0) {
    total = a.length * reps
  }
  else {
    const sRemainder = s.substring(0, remainder)
    const aRemainder = [...sRemainder.matchAll(/a/g)]
    const aRemainderLength = aRemainder.length || 0
    total = (a.length * Math.floor(reps)) + aRemainderLength
  }
  return total
}

// Tests
console.log("00:", repeatedString("abcac", 10))
console.log("0:", repeatedString("aba", 10))
console.log("1:", repeatedString("a", 1000000000000))
console.log("2:", repeatedString("aab", 882787))
console.log("9:", repeatedString("epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq", 549382313570))

