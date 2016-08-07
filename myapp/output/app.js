"use strict";

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Infrastructure example app listening on port 3000!');
});