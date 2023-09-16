# Repeated String Solution

***As always, please solve it yourself first so that you learn the concept***

This is another simple problem I can't think of too many good solutions. Decided on Regex to find the number of `a`s. Had to look up the appropriate method, of course, on Mozilla dev. Since the string repeats **x** number of times, the only remaining issue is to figure out if there is a remainder or not, and route to the appropriate logic based on that.

If there's no remainder then it's just the number of `a`s in the string times **n** divided by length of **s**.

If there is, then there are a few more steps. Find the remainder, find the substring of that remainder, find the number of `a`s in that substring and add it to the `a`s in the string times **n** divided by length of **s**, rounded down. Might make more sense in the code below.

```
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
```

## Big O Time
Not sure I'm full on at **O(1)** or somewhere in between that and **O(log n)**. **O(1)** is supposed to be a constant time regardless of the inputs but I know that larger numbers will definitely take longer to evaluate, even though it's not iterating. Feel like this is another easy 🥇.