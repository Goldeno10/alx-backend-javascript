const http = require('http');
const fs = require('fs').promises;

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
          try {
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
              if (Object.prototype.hasOwnProperty.call(fieldCounters, field)) {
                res.write(`\nNumber of students in ${field}: ${fieldCounters[field].length}. List: ${fieldCounters[field].join(', ')}`);
              }
            }
            res.end();
          } catch (error) {
            res.statusCode = 500;
            res.end('Internal Server Error');
          }
        } else {
          res.statusCode = 400;
          res.end('Bad Request: Invalid file format');
        }
      } else {
        res.statusCode = 400;
        res.end('Bad Request: Missing database argument');
      }
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
