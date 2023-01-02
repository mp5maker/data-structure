const maxSumArray = (arr, size) => {
  let sum = 0
  let maxSum = -Infinity
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= size - 1) {
      maxSum = Math.max(sum, maxSum)
      sum -= arr[i - size + 1]
    }
  }
  return maxSum
}


const arr = [2, 13, 4, 7, 9, 4, 5, 1]
console.log(maxSumArray(arr, 3))

