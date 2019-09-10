const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
// const axios = require('axios');
const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../dist/')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
