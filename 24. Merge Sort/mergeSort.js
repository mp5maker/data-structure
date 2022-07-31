const mergeSort = (arr) => {
  const helper = (newArr) => {
    if (newArr.length <= 1) return newArr
    const midIndex = Math.floor(newArr.length / 2);
    const leftArr = newArr.slice(0, midIndex)
    const rightArr = newArr.slice(midIndex);
    const leftResult = helper(leftArr);
    const rightResult = helper(rightArr);

    let leftIndex = 0
    let rightIndex = 0
    let result = []
    while (leftIndex < leftResult.length && rightIndex < rightResult.length) {
      const leftValue = leftResult[leftIndex]
      const rightValue = rightResult[rightIndex]
      if (leftValue < rightValue) {
        result.push(leftValue)
        leftIndex++
      } else if (leftValue > rightValue) {
        result.push(rightValue)
        rightIndex++
      }
    }
    if (leftIndex < leftResult.length) {
      result.push(...leftResult.slice(leftIndex))
    }
    if (rightIndex < rightResult.length) {
      result.push(...rightResult.slice(rightIndex))
    }
    return result
  }

  return helper(arr)
}

const numList = [4, 5, 6, 1, 3, 7, 2]
// Complexity nlog(n)
console.log(mergeSort(numList))