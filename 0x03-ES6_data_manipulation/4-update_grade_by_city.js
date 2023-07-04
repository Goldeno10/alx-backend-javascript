export default function updateStudentGradeByCity(students, city, newGrades) {
  const arrayOfStudents = [];
  newGrades.map((grade) => {
    const student = students.filter((stud) => stud.id === grade.studentId
      && stud.location === city);
    // const id = student[0].id;
    // const firstName = student[0].firstName;
    // const location = student[0].location;
    const gradeValue = ('grade' in grade) ? grade.grade : 'N/A';
    const { id, firstName, location } = student[0];
    const obj = {
      id,
      firstName,
      location,
      gradeValue,
    };
    arrayOfStudents.push(obj);
    return arrayOfStudents;
  });
  return arrayOfStudents;
}
