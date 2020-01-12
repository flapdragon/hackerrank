// Node.js
// momentarily struggled with 0 being an even number
var Regex_Pattern = /^[a-zA-Z02468]{40}[\s13579]{5}$/; //Do not delete '/'. Replace __________ with your regex.

function processData(Test_String) {
  //Enter your code here
  console.log(!!Test_String.match(Regex_Pattern));
}

processData('x4202v2A22A8a6aaaaaa2G2222m222qwertyYuIo13957') // test case 1
processData('2222222222aaaaaaaaaa2222222222aaaaaaaaaa13 57')
processData('x4202v2A22A8a6aaaaaa2G2222m222qwertyYuIo1395779')
processData('x4202v2A22A9a6aaaaaa2G2222m222qwertyYuIo13957')
