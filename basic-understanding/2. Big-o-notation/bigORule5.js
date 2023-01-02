// Big O(n^2)
const numList = [1, 2, 3, 4, 5, 6]
const numList2 = [1, 2, 3, 4]

const randomFunction = (nums, nums2) => {
  let total = 0
  for (num1 of nums) {
    for (num2 of nums2) {
      console.log(num1, num2)
      total +=1
    }
  }
  return total
}

randomFunction(numList, numList2) // O (n * m)