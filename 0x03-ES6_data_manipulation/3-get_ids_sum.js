// function that returns the sum of all students

function getStudentIdsSum(students){
  return students.reduce((t, x) => t + x.id, 0);  
}

export default getStudentIdsSum;
