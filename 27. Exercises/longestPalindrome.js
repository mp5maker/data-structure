var longestPalindrome = function (s) {
  let dict = {};
  for (let item of s) {
    if (item in dict) dict[item] += 1;
    else dict[item] = 1;
  }

  let length = 0;
  let allKeys = Object.keys(dict);
  for (let i = 0; i < allKeys.length; i++) {
    const currentKey = allKeys[i];
    const current = dict[currentKey];
    length += Math.floor(current / 2) * 2;
    if (length % 2 === 0 && current % 2 === 1) length++;
  }
  return length;
};
