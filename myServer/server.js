var express = require('express');
var canada = require('./Resources/Canada');
var japan = require('./Resources/Japan');
var USA = require('./Resources/USA');

var app = express(); // the main app

app.use('/Canada', canada);
app.use('/Japan', japan);
app.use('/USA', USA);
app.use(express.static(__dirname + '/Static'));

app.listen(3000);
