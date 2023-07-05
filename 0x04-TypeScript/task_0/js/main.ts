interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

let student1: Student = {firstName: "student1", 
  lastName: "sub1", age:89, location: "france",
}

let student2: Student = {firstName: "student2", 
  lastName: "sub2", age:23, location: "italy",
}

let studentsList: Array<Student> = [student1, student2]

var tableBody = document.querySelector("#table1")

studentsList.forEach((item) => {
  var row = document.createElement('tr');

  // first name cell
  var nameCell = document.createElement('td');
  nameCell.textContent = item.firstName;
  row.appendChild(nameCell);

  // location cell
  var locCell = document.createElement("td");
  locCell.textContent = item.location;
  row.appendChild(locCell);

  // append row to body
  tableBody.appendChild(row);

})