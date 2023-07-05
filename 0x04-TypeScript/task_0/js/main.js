var student1 = { firstName: "student1",
    lastName: "sub1", age: 89, location: "france",
};
var student2 = { firstName: "student2",
    lastName: "sub2", age: 23, location: "italy",
};
var studentsList = [student1, student2];
var tableBody = document.querySelector("#table1");
studentsList.forEach(function (item) {
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
});
