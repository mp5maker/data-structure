const binarySearch = (arr, val) => {
  let upperRange = arr.length - 1
  let lowerRange = 0
  let newArr = arr.sort((a, b) => a  - b)

  while(lowerRange <= upperRange) {
    let mid = Math.floor((upperRange + lowerRange) / 2)

    if (newArr[mid] === val) return true
    else if (newArr[mid] > val) upperRange = mid - 1
    else lowerRange = mid + 1
  }

  return false
}


console.log(binarySearch([1, 2, 123, 16, 29, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 123, 16, 29, 3, 4, 5], 79));