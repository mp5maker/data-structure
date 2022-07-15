const studentList = ["tim", "drake", "bob"]
const studentList2 = ["andrew", "chris", "lary"]


function checkStudent(students) {
  for (student of students) {
    if (student === "chris") {
      console.log("Available")
    }
  }
}

checkStudent(studentList)
checkStudent(studentList2)