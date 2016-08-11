"use strict";

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/output'));

app.get('/', function (req, res) {
  console.time('render');
  res.render('index');
  console.info('info message');
  console.error('error message');
  console.dir(console);
  console.timeEnd('render');
});


app.listen(app.get('port'), function () {
  console.log('Infrastructure example app listening on port', app.get('port'));
});