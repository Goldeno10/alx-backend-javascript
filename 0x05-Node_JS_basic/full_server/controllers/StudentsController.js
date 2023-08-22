const { readDatabase } = require('./utils'); // Import the readDatabase function from your utils file

class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }

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
}

module.exports = AppController;
