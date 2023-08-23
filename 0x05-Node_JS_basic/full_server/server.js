const express = require('express');

const app = express();
const routes = require('./controllers/routes/index');

// Use the defined routes
app.use('/', routes);

// Start the server
app.listen(1245);

module.exports = app;
