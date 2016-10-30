

'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
var router = express.Router();

app.get('/', function (req, res) {
  console.log("hello world");
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

