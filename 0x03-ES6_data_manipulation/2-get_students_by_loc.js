// function that retuns an array of objects

export function getListStudentsByLocation(students, city){
  // adding items
  result = students.filter((x) => x.city == city);
  return result;
}
