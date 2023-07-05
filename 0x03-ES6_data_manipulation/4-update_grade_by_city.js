// function that returns an array of students for
// a specific city

function updateStudentGradeByCity(students, city, newGrades) {
  const filterdList = students.filter((x) => x.city === city);
  return filterdList.map((stud) => {
    const filteredGrade = newGrades.filter((grade) => grade.studentId === stud.id);
    if (filteredGrade.length > 0) {
      return {
        ...stud,
        grade: filteredGrade[0].grade,
      };
    }
    return {
      ...stud,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
