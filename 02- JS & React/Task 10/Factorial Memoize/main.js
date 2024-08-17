const cache = {};
function memoizedFactorial(num) {
  if (cache[num]) {
    console.log("Cache Value Printed");
    return cache[num];
  }

  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }

  cache[num] = result;
  return result;
}

console.log(memoizedFactorial(5)); // Outputs: 120
console.log(memoizedFactorial(6)); // Outputs: 720
console.log(memoizedFactorial(5)); // Outputs: "Cache Value Printed" then 120
