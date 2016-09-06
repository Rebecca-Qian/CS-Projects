var express = require('express');

var USA = express();

USA.get('/', function(req, res){
	res.send('Hello from USA! What?');
});

module.exports = USA;
