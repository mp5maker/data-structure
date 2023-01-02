const studentList = ["andrew", "carolina", "david", "sean", "jennifer"]; // 0(1)

const randomFunction = (students) => {
  first = students[0]; // 0(1)
  total = 0 // 0(1)
  let new_list = []; // 0(1)
  for (student of students) {
    total += 1; // 0(n)
    new_list.push(student); // 0(n)
  }

  print(new_list) // 0(1)
  return total // 0(1)
}

console.log(randomFunction) // 0(6 + 2n) => O(n)
