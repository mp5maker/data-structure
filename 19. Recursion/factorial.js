let memo = {}
const factorial = (n) => {
  if (n <= 1) return 1
  if (n in memo) return memo[n]
  memo[n] =  n * factorial(n - 1)
  return memo[n]
}

const n = 120
console.log(factorial(n))