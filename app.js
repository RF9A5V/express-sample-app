const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.post('/', routes.postReplData);
app.get('/repl.json', routes.getReplData);

module.exports = app;
