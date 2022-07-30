const run = (n) => {
  if (n === 0) {
    return;
  }
  console.log("<<<<<<< Calling Execution")
  console.log("before run n: ", n)
  run(n - 1);
  console.log("after run n: ", n)
  console.log(">>>>>>> Returning Execution");
};

let n = 3;
run(3);
