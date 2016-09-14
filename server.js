var express = require('express');
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || '8080';

var routes = require('./app/index.js');

var app = express();

app.use(routes);

app.listen(port, host);
console.log('Server started on nodetogetherAMS');
