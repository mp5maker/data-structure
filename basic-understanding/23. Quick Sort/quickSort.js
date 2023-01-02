const quickSort = (arr) => {
  const helper = (newArr) => {
    if (newArr.length <= 1) return newArr;
    const lengthOfArray = newArr.length;
    let leftIndex = 1;
    let rightIndex = lengthOfArray === 2 ? 1 : lengthOfArray - 1;
    const pivotValue = newArr[0];

    while (rightIndex >= leftIndex) {
      const leftValue = newArr[leftIndex];
      const rightValue = newArr[rightIndex];
      if (leftValue > pivotValue && rightValue < pivotValue) {
        newArr[leftIndex] = rightValue;
        newArr[rightIndex] = leftValue;
      } else if (leftValue <= pivotValue) {
        leftIndex++;
      } else if (rightValue >= pivotValue) {
        rightIndex--;
      }
    }
    newArr[0] = newArr[rightIndex];
    newArr[rightIndex] = pivotValue;

    return [
      ...helper(newArr.slice(0, rightIndex)),
      pivotValue,
      ...helper(newArr.slice(rightIndex + 1)),
    ];
  };

  return helper(arr);
};

// Complexity O(nlog(n))
const numList = [4, 6, 1, 5, 3, 7, 2];
console.log(quickSort(numList));
