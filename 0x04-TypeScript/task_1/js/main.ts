class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean
  location: string
  yearsOfExperience?: number
  [key: string]: any

  constructor(
    firstName: string,
    lastName: string, 
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience? : number,
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;

  }
}

const t1: Teacher = {
  firstName: "Joe",
  lastName: "biden",
  fullTimeEmployee: false,
  location: "France",
  name: "hamza"
}

t1.time = "9AM";

console.log(t1)

// output

// {
//   firstName: 'Joe',
//   lastName: 'biden',
//   fullTimeEmployee: false,
//   location: 'France',
//   name: 'hamza',
//   time: '9AM'
// }