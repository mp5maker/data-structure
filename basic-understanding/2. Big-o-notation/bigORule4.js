const numList = [1, 2, 3, 4]
const charList = ['a', 'b', 'c', 'd', 'e']

const randomFunction = (nums, chars) => {
  for (num of nums) {
    console.log(num)
  }

  for (char of chars) {
    console.log(char)
  }
}

randomFunction(numList, charList) // O(n + m)