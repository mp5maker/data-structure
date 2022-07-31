const bubbleSortRecursion = (arr) => {
  const helper = (upperRange) => {
    if (upperRange <= 0) return arr
    for (let i = 0; i < upperRange; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (next !== undefined && current > next) {
        arr[i + 1] = current;
        arr[i] = next;
      }
    }
    return helper(upperRange - 1);
  }

  return helper(arr.length - 1);
};

const options = [-2, 45, 0, 11, -9];
console.log(bubbleSortRecursion(options));
