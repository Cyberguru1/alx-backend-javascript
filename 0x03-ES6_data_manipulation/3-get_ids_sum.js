// function that returns the sum of all students

export function getStudentIdsSum(students){
  return students.reduce((t, x) => t + x, 0);  
}

export default getStudentIdsSum;