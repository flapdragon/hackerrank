
# Jumping on the Clouds Solution

***As always, please solve it yourself first so that you really learn the concept***

I decided to iterate through but not with a **for** loop at **i++** because I knew that there would be skips and I thought that iterating in the loop declaration and again inside the loop would be a ~~cluster~~ a bad idea. So I used a **while** loop and handled the iteration all in one place as one normally would do in a **while** loop.

I wound up keeping track of 2 variables: ***i*** for the iterator and ***jumps*** for the number of jumps. I decided to start at the beginning **c[0]**, look ahead 2, **c[i+2]** and if it was **0** or a safe cumulus cloud I would jump by 2, otherwise jump by 1. In the end, depending on the array, you wind up iterating through less than **c.length**

```
function  jumpingOnClouds(c) {
  const len = c.length - 1
  let i = 0
  let jumps = 0
  while (i < len) {
    jumps++
    if (i + 2 <= len && c[i + 2] === 0) {
      i += 2
    }
    else {
      i++
    }
  }
  return  jumps
}
```
## Big O Time
I suppose my solution is closest to **O(log n)** because it iterates less than the array length. Although it doesn't decrease every loop it does decrease by **1** every **c[i + 2] = 0**. This is a simple problem and there really aren't that many ways to solve this. Browsing through the solutions I didn't see a better one. For once I get a 🥇 first time through.
