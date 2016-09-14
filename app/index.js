var express = require('express');
var app = express();

var motivations = require('motivations');
var pickOne = require('pick-one');


app.get('/', function(request, response){
  response.send(pickOne(motivations))
});

app.get('/all', function(request, response){
  var id = request.params.motivationID
  response.send(motivations);
});

app.get('/:motivationID', function(request, response){
  var id = request.params.motivationID
  response.send(motivations[id]);
});

module.exports = app;
