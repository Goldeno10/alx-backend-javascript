const fs = require('fs/promises');

function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');

      const fieldCounters = {};

      lines.slice(1).forEach(line => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          const field = fields[3].trim();

          if (!fieldCounters[field]) {
            fieldCounters[field] = [];
          }

          fieldCounters[field].push(fields[1].trim()); // Assuming first name is at index 1
        }
      });

      resolve(fieldCounters);
    } catch (error) {
      reject(error);
    }
  });
}

// Example usage:
readDatabase('database.csv')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
