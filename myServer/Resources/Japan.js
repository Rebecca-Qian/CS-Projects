var express = require('express');

var japan = express();

japan.get('/', function(req, res){
	res.send('Konichiwa!');
});

module.exports = japan;