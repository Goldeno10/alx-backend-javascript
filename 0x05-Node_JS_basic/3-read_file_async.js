const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the CSV data into lines and filter out empty lines
      let lines = data.split('\n').filter(line => line.trim() !== '');
      lines = lines.slice(1);

      const fieldCounters = {};

      lines.forEach(line => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          const field = fields[3].trim();

          if (fieldCounters[field] === undefined) {
            fieldCounters[field] = [];
          }

          fieldCounters[field].push(fields[0].trim());
        }
        
      });
      console.log('Number of students: ', lines.length);
      for (const field in fieldCounters) {
        console.log(
            `Number of students in ${field}: ${fieldCounters[field].length}. List: ${fieldCounters[field].join(', ')}`
            );
      }
      resolve(fieldCounters);
    });
  });
}

module.exports = countStudents;
