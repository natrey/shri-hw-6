"use strict";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('output'));
app.use(express.static(__dirname + '/output'));


app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  console.time('render');
  res.sendFile(path.join(__dirname + '/index.html'));
  console.info('info message');
  console.error('error message');
  console.dir(console);
  console.timeEnd('render');
});


app.listen(app.get('port'), function () {
  console.log('Infrastructure example app listening on port', app.get('port'));
});