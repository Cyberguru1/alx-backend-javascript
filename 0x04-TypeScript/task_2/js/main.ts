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

interface Directory extends Teacher {
  numberOfReports: number;
}

const t1: Directory = {
  firstName: "Joe",
  lastName: "biden",
  fullTimeEmployee: false,
  location: "France",
  name: "hamza",
  numberOfReports: 24,
}

console.log(t1)

// prints
// {
//   firstName: 'Joe',
//   lastName: 'biden',
//   fullTimeEmployee: false,
//   location: 'France',
//   name: 'hamza',
//   numberOfReports: 24
// }


