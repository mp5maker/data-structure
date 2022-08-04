const twoSum = (nums, target) => {
  const helper = (arr, reach = 0, startIndex = 0, indexes = []) => {
    if (reach === target && indexes.length == 2) return indexes;

    for (let i = startIndex; i < arr.length; i++) {
      const current = arr[i];
      const newValue = reach + current;
      const result = helper(arr, newValue, i + 1, [...indexes, i]);
      if (result !== null) return result;
    }

    return null
  };

  const finalResult =  helper(nums);
  return finalResult ? finalResult : null
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-1, -2, -3, -4, -5], -8));

// 3 2 4

// 3
// [0]
// 2      4
// [0,1] [0.2]
// null   null

// 2
// [1]
// 4
// [1, 2]

// 2
