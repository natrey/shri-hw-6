"use strict";

const express = require('express');
const app = express();


app.get('/', function (req, res) {
  app.use(express.static(__dirname));
});

app.listen(3000, function () {
  console.log('Infrastructure example app listening on port 3000!');
});