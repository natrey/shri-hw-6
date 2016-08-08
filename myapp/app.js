"use strict";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/output'));

app.get('/', function (req, res) {
  console.time('render');
  res.sendFile(path.join(__dirname + '/index.html'));
  console.info('info message');
  console.error('error message');
  console.dir(console);
  console.timeEnd('render');
});

app.listen(3000, function () {
  console.log('Infrastructure example app listening on port 3000!');
});