var express = require('express');

var canada = express();

canada.get('/', function(req, res){
	res.send('Hello from Canada! Sorry!');
});

module.exports = canada;