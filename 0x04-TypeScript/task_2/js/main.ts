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

  workDirectorTasks = () => {return "Getting to director tasks"}
}

class Teacher implements TeacherInterface {

  workFromHome() {
    return 'Cannot work from home'
  }

  getCoffeBreak() {
    return "Cannot have a break"
  }

  workTeacherTasks = () => {return "Getting to work"}
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

// task 6

function isDirector(employee: DirectorInterface | TeacherInterface) {
  return employee instanceof Director;
}

function executeWork(obj: any) {
  if (isDirector(obj)) {
  return obj.workDirectorTasks();
  }
  return obj.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
// output
// Getting to work

console.log(executeWork(createEmployee(1000)));
// output
// Getting to director tasks

// task 7

type Subject = "math" | "Histroy";

const teachClass(todayClass: Subject): string => {
  if (typeof)
}