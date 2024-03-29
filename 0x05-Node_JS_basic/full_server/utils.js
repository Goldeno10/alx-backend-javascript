const fs = require('fs');

function readDatabase(filePath) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const fieldCounters = {};

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          const field = fields[3].trim();

          if (!fieldCounters[field]) {
            fieldCounters[field] = [];
          }

          fieldCounters[field].push(fields[1].trim());
        }
      });

      resolve(fieldCounters);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = readDatabase;
