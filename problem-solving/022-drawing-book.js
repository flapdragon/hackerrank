// Node.js
/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  // If the page sought is the first or last page of the book
  // NOTE: In this case one if with 2 clauses seems to be faster than if/else if
  if (p == 1 || p == n) {
    console.log(0)
    return 0
  }
  // From page 1 by itself on the right side, rounding up from .5 to 1 always
  // works to get that extra page turn
  const fromFirst = Math.round((p - 1) / 2)
  // If the last page is even, and on the left side by itself, round up to get
  // that extra page turn.
  // If the last page is odd, and on the right, there is no extra page turn so
  // found down (floor)
  // NOTE: ternary seems to be faster than ifelse in this case, but we're not
  // looping so it is a minor concern
  const fromLast = n % 2 === 0 ? Math.round((n - p) / 2) : Math.floor((n - p) / 2)
  console.log(fromFirst < fromLast ? fromFirst : fromLast)
  return fromFirst < fromLast ? fromFirst : fromLast
}

pageCount(6, 2)
pageCount(5, 4)
pageCount(6, 5)
