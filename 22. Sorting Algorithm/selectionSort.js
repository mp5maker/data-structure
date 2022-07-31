const selectionSort = (arr) => {
  let lowerRange = 0
  while(lowerRange < arr.length - 1) {
    for(let i = lowerRange; i < arr.length; i++) {
      const current = arr[i]
      const next = arr[i + 1]
      if (next !== undefined && current <  next) {
        arr[i + 1] = current
        arr[i] = next
      }
    }
    const last = arr[arr.length - 1]
    const first = arr[lowerRange]
    arr[lowerRange] = last
    arr[arr.length - 1] = first
    lowerRange++
  }
  return arr
};

const options = [-2, 45, 0, 11, -9];
// O(n^2) Complexity
console.log(selectionSort(options));
