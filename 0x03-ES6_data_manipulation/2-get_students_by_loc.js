// function that retuns an array of objects

export function getListStudentsByLocation(students, city){
  return students.filter((x) => x.location === city);
}
export default getListStudentsByLocation;
