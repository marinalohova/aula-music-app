require('express-async-errors');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const env = require('./env');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, env.ASSETS_DIR)));

// Routes
app.use(env.SERVICE_PREFIX, routes);

// 404 Not Found
app.get('*', function(req, res) {
  res.status(404).send({error: 'Resource not found'});
});

// Error Handling
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send({error: err.message});
});

app.listen(env.SERVICE_PORT, () => console.log(`Aula Music API listening on port ${env.SERVICE_PORT}!`));


