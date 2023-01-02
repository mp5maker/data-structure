const detectCapital = (str) => {
  let allAreCapital = true
  let allAreLowercase = true
  let onlyFirstIsCapital = true

  for (let i = 0; i < str.length; i++) {
    const sub = str[i]
    if (sub === sub.toUpperCase() && i !== 0) onlyFirstIsCapital = false
    if (sub !== sub.toLowerCase()) allAreLowercase = false
    if (sub !== sub.toUpperCase()) allAreCapital = false;
  }

  return allAreCapital || allAreLowercase || onlyFirstIsCapital
}

console.log(detectCapital('UNWIRED')) // true
console.log(detectCapital('captain')) // true
console.log(detectCapital('Learning')) // true
console.log(detectCapital('LearNing')) // false