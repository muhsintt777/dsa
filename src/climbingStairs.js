// Given n steps, and you can climb either 1 or 2 steps at a time, in how many distinct ways can you reach the top?
export const climbingStairs = () => {
  const n = 10;

  let result = 0;
  if (n <= 2) {
    console.log('result-- ', n);
    return;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  result = curr;

  console.log('result-- ', result);
  return;
};
