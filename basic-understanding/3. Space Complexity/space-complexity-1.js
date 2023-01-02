const allCubes = (items) => {
  result = []
  resultTwo = ""
  for (item of items) {
    result.push(Math.pow(item, 3)); // O(n
    resultTwo = Math.pow(item, 3) // O(1)
  }
  print(result);
};

items = [2, 3, 4, 5, 6, 7];
allCubes(items);
