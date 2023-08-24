const http = require('http');
const fs = require('fs/promises');

const app = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      const db = process.argv[2];
      if (db) {
        const database = db.split('.', 2);
        if (database[1] === 'csv') {
          const data = await fs.readFile(db, 'utf8');
          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const fieldCounters = {};
          lines.slice(1).forEach((line) => {
            const fields = line.split(',');
            if (fields.length >= 4) {
              const field = fields[3].trim();

              if (!fieldCounters[field]) {
                fieldCounters[field] = [];
              }
              fieldCounters[field].push(fields[0].trim());
            }
          });
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;

          res.write('This is the list of our students\n');
          res.write(`Number of students: ${lines.length - 1}`);

          for (const field in fieldCounters) {
            if (field) {
              res.write(`\nNumber of students in ${field}: ${fieldCounters[field].length}. List: ${fieldCounters[field].join(', ')}`);
            }
          }
          res.end();
        }
      }
    }
  }
});

app.listen(1245);
