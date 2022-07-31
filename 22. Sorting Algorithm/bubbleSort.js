const bubbleSort = (arr) => {
  let upperRange = arr.length - 1
  while(upperRange > 0) {
    for (let i = 0; i < upperRange; i++) {
      const current = arr[i]
      const next = arr[i + 1]
      if (next !== undefined && current > next) {
        arr[i + 1] = current
        arr[i] = next
      }
    }
    upperRange -= 1
  }
  return arr
}

const options = [-2, 45, 0, 11, -9]
// O(n^2) Complexity
console.log(bubbleSort(options))