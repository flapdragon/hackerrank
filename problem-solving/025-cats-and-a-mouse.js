// Node.js
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) {
    console.log('Cat A')
    return 'Cat A'
  }
  else if (Math.abs(z - y) < Math.abs(z - x)) {
    console.log('Cat B')
    return 'Cat B'
  }
  else {
    console.log('Mouse C')
    return 'Mouse C'
  }
}

catAndMouse(1, 2, 3)
catAndMouse(1, 3, 2)
