// function that returns an array of students for 
// a specific city

export function updateStudentGradeByCity(students, city, newGrades){
  filterd_list = students.filter((x) => x.city == city);
  return filterd_list.map((stud) => {
    const filteredGrade = newGrades.filter((grade) => grade.studentId == stud.Id);
    if (filteredGrade.length > 0) {
      return {
        ...stud,
        grade:filteredGrade[0]['grade']
      };
    }
    return {
        ...stud,
        grade: "N/A"
      };
  });
}

export default updateStudentGradeByCity;
