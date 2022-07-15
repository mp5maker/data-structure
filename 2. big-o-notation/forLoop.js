const TIMER_NAME = 'forLoop';

console.time(TIMER_NAME)
let total = 0
for (let i = 1; i <= 100; i ++) {
  total += i
}
console.log("Total: " + total)
console.timeEnd(TIMER_NAME)