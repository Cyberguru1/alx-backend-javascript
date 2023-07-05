class teacher {
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

const t1: teacher = {
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


// task 2
interface Directory extends teacher {
  numberOfReports: number;
}

const t2: Directory = {
  firstName: "Joe",
  lastName: "biden",
  fullTimeEmployee: false,
  location: "France",
  name: "hamza",
  numberOfReports: 24,
}

console.log(t2)

// prints
// {
//   firstName: 'Joe',
//   lastName: 'biden',
//   fullTimeEmployee: false,
//   location: 'France',
//   name: 'hamza',
//   numberOfReports: 24
// }

interface inputType {
  firstName: string;
  lastName: string;
}

const printTeacher = (teacher: inputType) => {
  return teacher.firstName[0] + ". " + teacher.lastName
}

console.log(printTeacher(t2))

// output
// J. biden

// task 4

interface studentClass {
  firstName: string;
  lastName: string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(contents: studentClass) {
    this.firstName = contents.firstName;
    this.lastName = contents.lastName;
  }

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.firstName
  }
}


let obj = new StudentClass({firstName:"Jacob", lastName:"sadline"})

console.log(obj.displayName())

// output
// Jacob

console.log(obj.workOnHomework())

// output
// Currently working


// task 5

interface DirectorInterface {
  workFromHome: () => string;
  getCoffeBreak: () => string;
  workDirectorTasks: () => string
}


interface TeacherInterface {
  workFromHome: () => string;
  getCoffeBreak: () => string;
  workTeacherTasks: () => string
}

class Director implements DirectorInterface {

  workFromHome() {
    return 'Working from home'
  }

  getCoffeBreak() {
    return "Getting a coffee break"
  }

  workDirectorTasks = () => {return " Getting to director tasks"}
}

class Teacher implements TeacherInterface {

  workFromHome() {
    return 'Cannot work from home'
  }

  getCoffeBreak() {
    return "Cannot have a break"
  }

  workTeacherTasks = () => {return " Getting to work"}
}

const createEmployee = (obj: number | string ):  Director | Teacher => {
  if ((typeof obj === "number") && (obj < 500)) {
    return new Teacher;
  }
  return new Director;
}

console.log(createEmployee(200));
// output
// Teacher
console.log(createEmployee(1000));
// output
// Director
console.log(createEmployee('$500'));
// output
// Directory