const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i
    while(currentIndex > -1) {
      let current = arr[currentIndex];
      let previous = arr[currentIndex - 1]
      if (current < previous) {
        arr[currentIndex] = previous;
        arr[currentIndex - 1] = current;
      }
      currentIndex--
    }
  }
  return arr
};

const options = [-2, 45, 0, 11, -9];
// O(n^2) Complexity
console.log(insertionSort(options));
