const insertionSortRecursion = (arr) => {
  const helper = (currentIndex) => {
      if (currentIndex === 0) return
      let current = arr[currentIndex];
      let previous = arr[currentIndex - 1];
      if (current < previous) {
        arr[currentIndex] = previous;
        arr[currentIndex - 1] = current;
      }
      currentIndex--;
      helper(currentIndex)
  }

  for (let i = 1; i < arr.length; i++) helper(i)
  return arr;
};

const options = [-2, 45, 0, 11, -9];
// O(n^2) Complexity
console.log(insertionSortRecursion(options));
