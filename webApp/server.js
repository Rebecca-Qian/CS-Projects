var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user = express(); //sub app
var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Static'));
app.use('/user', user);

user.post('/', function(req, res) {
	console.log(req.body);
	MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
		if (err != null) {
			res.send('OH NO!');
		} else {
			var collection = db.collection('users');
			collection.insertMany([req.body], function(err, result) {
				if (err != null) {
					res.send('OH NO!');
				} else {
					res.send("posted request");
					db.close();
				}
			});
		}
	});
});


app.listen(3000);
