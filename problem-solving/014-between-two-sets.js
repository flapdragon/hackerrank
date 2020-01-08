// Node.js
// version 3 update.
// no function change, just added tests to one million. got opposite performance results of what i expected. 
// seems to be because of the loop over the allFactorArray and creating the counts object which is more 
// costly than i thought it would be. i know it's an extra loop but i thought the fewer steps of the other 
// loops would help. turns out i was wrong. even converting to for loop didn't help.
// will continue pondering if there is a faster way to do that step.
function getTotalX(a, b) {
  console.time('step1')

  let allFactorArray = [];
  // Loop over each member of array a
  for (let i = 0, len = a.length; i < len; i++) {
    // console.log('a[i]', a[i])
    // Loop by a[i] size steps to get a[i] factors
    for (let j = a[i], len = b[0] + 1; j < len; j += a[i]) {
      // console.log('j', j)
      allFactorArray.push(j)
    }
  }
  console.timeEnd('step1')

  console.time('step2')
  // Get count of each factor element
  let counts = {}
  allFactorArray.forEach(x => counts[x] = (counts[x] || 0)+1)
  // for (let i = 0, len = allFactorArray.length; i < len; i++) {
  //   counts[allFactorArray[i]] = (counts[allFactorArray[i]] || 0)+1
  // }
  // Grab all factors that matched a[i] number of times, or common factors across all a[x] array elements
  const commonFactors = Object.keys(counts).filter(key => counts[key] >= a.length)
  console.timeEnd('step2')

  console.time('step3')
  // Compare array a factors against array b to see if they are also factors of b
  let finalFactors = []
  for (let i = 0, len = commonFactors.length; i < len; i++) {
    let isFactorOfB = true
    for (let j = 0, len = b.length; j < len; j++) {
      if (b[j] % commonFactors[i] != 0) {
        isFactorOfB = false
      }
    }
    if (isFactorOfB) {
      finalFactors.push(commonFactors[i])
    }
  }
  console.timeEnd('step3')
  // console.log('finalFactors', finalFactors)
  console.log('finalFactors.length', finalFactors.length)
  return finalFactors.length
}

getTotalX([2, 4], [16, 32, 96])
getTotalX([2], [20, 30, 12])
getTotalX([3, 4], [24, 48])
getTotalX([1], [100])
getTotalX([1], [1000])
getTotalX([1], [10000])
getTotalX([1], [100000])
getTotalX([1], [1000000])
getTotalX([1], [10000000])

// const start = new Date().getTime()
// const end = new Date().getTime()


// version 3. finally got incremented by factors instead of i++ working.
// i thought it would immediately be faster but it's about the same.
// you don't start seeing a performance improvement until the numbers get higher.
// starting around getTotalX([1], [10000])

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
// function getTotalFactors(a, b) {
//   console.time('factorsstepx')
  
//   let allFactorArray = [];
//   // Loop over each member of array a
//   for (let i = 0, len = a.length; i < len; i++) {
//     // console.log('a[i]', a[i])
//     // Loop by a[i] size steps to get a[i] factors
//     for (let j = a[i], len = b[0] + 1; j < len; j += a[i]) {
//       // console.log('j', j)
//       allFactorArray.push(j)
//     }
//   }

//   // Get count of each factor element
//   let counts = {}
//   allFactorArray.forEach(x => counts[x] = (counts[x] || 0)+1)
//   // Grab all factors that matched a[i] number of times, or common factors across all a[x] array elements
//   const commonFactors = Object.keys(counts).filter(key => counts[key] >= a.length)

//   // Compare array a factors against array b to see if they are also factors of b
//   let finalFactors = []
//   for (let i = 0, len = commonFactors.length; i < len; i++) {
//     let isFactorOfB = true
//     for (let j = 0, len = b.length; j < len; j++) {
//       if (b[j] % commonFactors[i] != 0) {
//         isFactorOfB = false
//       }
//     }
//     if (isFactorOfB) {
//       finalFactors.push(commonFactors[i])
//     }
//   }
//   return finalFactors.length
// }

// getTotalX([2, 4], [16, 32, 96]);
// getTotalX([2], [20, 30, 12]);
// getTotalX([3, 4], [24, 48]);


// version 2. working version.
// function getTotalX(a, b) {
//   const commonFactors = [];
//   for (let i = a[a.length - 1], len = b[0] + 1; i < len; i++) {
//     let isFactorA = true;
//     for (const elementA of a) {
//       if (i % elementA !== 0) {
//         isFactorA = false;
//       }
//     }
//     if (isFactorA) {
//       commonFactors.push(i);
//     }
//   }

//   let finalFactors = [];
//   for (let i = 0, len = commonFactors.length; i < len; i++) {
//     let isFactorB = true;
//     for (const element of b) {
//       if (element % commonFactors[i] !== 0) {
//         isFactorB = false;
//       }
//     }
//     if (isFactorB) {
//       finalFactors.push(commonFactors[i]);
//     }
//   }
//   console.log('finalFactors', finalFactors);
//   console.log('finalFactors.length', finalFactors.length);
//   return finalFactors.length;
// }


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
