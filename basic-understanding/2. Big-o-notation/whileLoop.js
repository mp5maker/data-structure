const TIMER_NAME = "whileLoop";

console.time(TIMER_NAME);
let total = 0;
let i = 1;
while (i <= 100) {
  total += i;
  i++;
}
console.log("Total: " + total);
console.timeEnd(TIMER_NAME);
