const { readDatabase } = require('./utils');

class StudentsController {
  static getAllStudents(req, res) {
    try {
      const databasePath = 'database.csv';
      const data = readDatabase(databasePath);

      const responseLines = [];

      responseLines.push('This is the list of our students');

      const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        const students = data[field];
        const numOfStudents = students.length;
        const studentList = students.join(', ');

        responseLines.push(`Number of students in ${field}: ${numOfStudents}. List: ${studentList}`);
      });

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // eslint-disable-next-line consistent-return
  static getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.query;
      const allowedMajors = ['CS', 'SWE'];

      if (!allowedMajors.includes(major)) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const databasePath = 'database.csv';
      const data = readDatabase(databasePath);

      const studentsInMajor = data[major] || [];

      const responseLines = [];

      responseLines.push(`List of students in ${major}: ${studentsInMajor.join(', ')}`);

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
