var express = require('express');
var app = express();
var jsondata = require('./data/details.json');

app.get('/', function (req, res) {

  res.send(jsondata);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});