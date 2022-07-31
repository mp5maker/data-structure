const binarySearchRecursion = (arr, val) => {
  const newArr = arr.sort((a, b) => a - b)

  const helper = (left, right) => {
    if (left > right) return -1
    const mid = Math.floor((right + left) / 2)
    if (newArr[mid] === val) return mid
    else if (newArr[mid] > val) right = mid - 1
    else left = mid + 1
    return helper(left, right)
  }

  return helper(0, newArr.length - 1)
}

console.log(binarySearchRecursion([1, 2, 123, 16, 29, 3, 4, 5], 2));
console.log(binarySearchRecursion([1, 2, 123, 16, 29, 3, 4, 5], 79));
