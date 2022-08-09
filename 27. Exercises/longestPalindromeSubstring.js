var longestPalindromeSubstring = function (s) {
  let maxWord = "";

  const palindromeIncrease = (leftIndex, rightIndex) => {
    while (
      leftIndex >= 0 &&
      rightIndex <= s.length - 1 &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
    }
    return s.substring(leftIndex, rightIndex + 1);
  };

  for (let i = 0; i < s.length; i++) {
    const previous = s[i - 1];
    const current = s[i];
    const next = s[i + 1];
    const forwardNext = s[i + 2];

    if (previous === next) {
      const newWord = previous + current + next;
      maxWord =
        maxWord.length < newWord.length
          ? palindromeIncrease(i - 1, i + 1)
          : maxWord;
    }

    if (previous === forwardNext) {
      const newWord = previous + current + next + forwardNext;
      maxWord =
        maxWord.length < newWord.length
          ? palindromeIncrease(i - 1, i + 2)
          : maxWord;
    }
  }
  return maxWord.length;
};


const str = "abccccdd";
console.log(longestPalindromeSubstring(str))