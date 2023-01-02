const twoSum = function (nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current in dict) {
      return [dict[current], i];
    } else {
      dict[target - current] = i;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
