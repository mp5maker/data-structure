const selectionSortRecursion = (arr) => {
  const helper = (lowerRange) => {
    if (lowerRange >= arr.length - 1) {
      return arr;
    }
    for (let i = lowerRange; i < arr.length; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (next !== undefined && current < next) {
        arr[i + 1] = current;
        arr[i] = next;
      }
    }
    const last = arr[arr.length - 1];
    const first = arr[lowerRange];
    arr[lowerRange] = last;
    arr[arr.length - 1] = first;
    lowerRange++;
    return helper(lowerRange)
  };
  return helper(0);
};

const options = [-2, 45, 0, 11, -9];
// O(n^2) Complexity
console.log(selectionSortRecursion(options));
