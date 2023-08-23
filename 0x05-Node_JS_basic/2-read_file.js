#!/usr/bin/env node
/*
Task:
     Reading a file synchronously with Node JS
    mandatory
    Using the database database.csv (provided in project description),
    create a function countStudents in the file 2-read_file.js

    Create a function named countStudents. It should accept a path in
    + argument
    The script should attempt to read the database file synchronously
    If the database is not available, it should throw an error with the
    + text Cannot load the database
    If the database is available, it should log the following message to
    + the console Number of students: NUMBER_OF_STUDENTS
    It should log the number of students in each field, and the list with
    + the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    CSV file can contain empty lines (at the end) - and they are not a
    + valid student!
*/
const fs = require('fs');
// const csv = require('csv-parser');

function countStudents(filePath) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the CSV data into lines and filter out empty lines
    let lines = data.split('\n').filter((line) => line.trim() !== '');
    lines = lines.slice(1);

    const fieldCounters = {};

    lines.forEach((line) => {
      const fields = line.split(',');
      const firstName = fields[0];
      const field = fields[3];

      if (fieldCounters[field] === undefined) {
        fieldCounters[field] = [];
      }

      if (firstName) {
        fieldCounters[field].push(firstName.trim());
      }
    });

    // Log the results
    console.log('Number of students:', lines.length);
    for (const field in fieldCounters) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldCounters[field].length}. List: ${fieldCounters[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
