const express = require('express');

const app = express();
const routes = require('./controllers/routes/index');

app.use('/', routes);

app.listen(1245);

module.exports = app;
