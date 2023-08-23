const { readDatabase } = require('./utils'); // Import the readDatabase function from your utils file

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = 'database.csv'; // Set the path to your database file
      const data = await readDatabase(databasePath);

      const responseLines = [];

      responseLines.push('This is the list of our students');

      // Sort fields alphabetically (case-insensitive)
      const sortedFields = Object.keys(data).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      sortedFields.forEach(field => {
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

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.query.major;
      const allowedMajors = ['CS', 'SWE'];

      if (!allowedMajors.includes(major)) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const databasePath = 'database.csv'; // Set the path to your database file
      const data = await readDatabase(databasePath);

      const studentsInMajor = data[major] || []; // Get students in the specified major

      const responseLines = [];

      responseLines.push(`List of students in ${major}: ${studentsInMajor.join(', ')}`);

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
