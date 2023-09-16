
# Jumping on the Clouds Solution

***As always, please solve it yourself first so that you learn the concept***

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
Not sure I'm full on at **O(1)** or somewhere in between that and **O(log n)**. **O(1)** is supposed to be a constant time regardless of the inputs but I know that larger numbers will definitely take longer to evaluate, even though it's not iterating. Feel like this is another easy 🥇.
