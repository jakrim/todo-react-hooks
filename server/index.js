const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');
// const axios = require('axios');
const app = express();

app.use(parser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../dist/')));

app.get('/addTodo', (req, res) => {
  //   db.query()
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
