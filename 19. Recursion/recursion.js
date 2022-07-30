const run = (n)  => {
  if (n === 0) {
    return;
  }
  run(n - 1);
  console.log(n);
}


let n = 3
run(3)