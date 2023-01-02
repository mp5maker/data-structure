const reverseString = (str) => {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (i >= str.length - 1 - i) break;
    let temp = str[i]
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }
  return str.join('')
};


console.log(reverseString('unwired'))