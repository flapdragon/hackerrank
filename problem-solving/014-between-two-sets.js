// Node.js
// version 2. working version.
/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  const commonFactors = [];
  for (let i = a[a.length - 1], len = b[0] + 1; i < len; i++) {
    let isFactorA = true;
    for (const elementA of a) {
      if (i % elementA !== 0) {
        isFactorA = false;
      }
    }
    if (isFactorA) {
      commonFactors.push(i);
    }
  }

  let finalFactors = [];
  for (let i = 0, len = commonFactors.length; i < len; i++) {
    let isFactorB = true;
    for (const element of b) {
      if (element % commonFactors[i] !== 0) {
        isFactorB = false;
      }
    }
    if (isFactorB) {
      finalFactors.push(commonFactors[i]);
    }
  }
  console.log('finalFactors', finalFactors);
  console.log('finalFactors.length', finalFactors.length);
  return finalFactors.length;
}

getTotalX([2, 4], [16, 32, 96]);
getTotalX([2], [20, 30, 12]);
getTotalX([3, 4], [24, 48]);


// version 1. unnecessarily harder and more complex.
// basically trying to get all factors first and then try those against the
// second array.
// the problem with this approach is that it gets all factors of each element
// but not factors that are factors of BOTH elements, which i discovered on
// [3, 4], [24, 48].
// was efficient with looping and only step by known factors rather than 1
// because 1 will definitely have known incorrect attempts.
// function getTotalX(a, b) {
//   let factorArray = [];
//   let commonFactors = [];
//   for (let i = 0, len = a.length; i < len; i++) {
//     const factor = a[i];
//     // const upperLimit = Math.min(...b) + 1;
//     console.log('factor', factor);
//     // console.log('upperLimit', upperLimit);
//     for (let j = factor; j < Math.min(...b) + 1; j += factor) {
//       console.log(j);
//       factorArray.push(j);
//     }
//     console.log('factorArray', factorArray);
//   }
//   factorArray.sort();
//   // Remove duplicates
//   commonFactors = factorArray.filter((element, index) => element != factorArray[index - 1]);
//   commonFactors = commonFactors.filter((element, index) => element >= Math.max(...a));
//   console.log('commonFactors', commonFactors);
//
//   let factors = [];
//   for (let i = 0, len = commonFactors.length; i < len; i++) {
//     let isFactorB = true;
//     for (const element of b) {
//       if (element % commonFactors[i] !== 0) {
//         isFactorB = false;
//       }
//       console.log('element', element);
//       console.log('isFactorB', isFactorB);
//     }
//     if (isFactorB) {
//       factors.push(commonFactors[i]);
//     }
//   }
//   console.log('factors', factors);
//   console.log('factors.length', factors.length);
//   return factors.length;
// }
