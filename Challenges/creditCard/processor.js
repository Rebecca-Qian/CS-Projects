// Import file system module
var fs = require('fs');
//var JSONStream = require('JSONStream');
//fs.readFile(file, [encoding], [callback]);

//require('path').dirname(require.main.filename);
var addr = process.cwd() + "/test.txt";

//console.log("The current working directory is " + addr);

// fs.readFile(path.resolve(__dirname, 'settings.json'), 'UTF-8', function(err, data) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// });

// fs.readFile(addr, 'utf8', function(err, data) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// })

// Get first 2 command line inputs
// var inputs = process.argv.slice(2);
// console.log('Inputs: ', inputs);

var Processor = {};

// Method to create new Account
Processor.creditCard = function (name, cardNumber, limit) {
	this.name = name;
	this.number = cardNumber;
	this.number = parseFloat(limit.replace(/[^0-9-.]/g, ''));
}

// Takes in a single transaction with
// 3 or 4 inputs
Processor.parse = function(transaction) {
	var inputs = transaction.split(' ');
	 var name = inputs[1];
	 console.log(name);
	 var number = inputs[2];
	 var value = inputs[3];

	switch(inputs[0].toLowerCase()) {
		case 'add' :
			console.log("add");
			// Creates new Credit Card Account
			this[name] = new this.creditCard(name, number, value);
			console.log(this[name]);
			console.log(this);
			break;
		case 'charge' :
			console.log("charge");
			this[name].limit = this[name].limit - number;
			break;
		case 'credit' :
			//console.log("credit");
			this[name].limit = this[name].limit - number;
			break;
	}
}


var readStream = fs.createReadStream(addr);
//readStream.pipe(process.stdout);

// var parseStream = JSONStream.parse('rows.*.doc');

// parseStream.on('data', function(res) {
// 	console.log(res);
// });

// readStream.pipe(parseStream);
var data = '';

readStream.on('data', function(chunk) {
    data+=chunk;
    console.log(data);
    var lines = data.split('\n');
    for (var i = 0; i < lines; i++) {
    	//console.log(lines[i]);
    	console.log("hi");
    	Processor.parse(lines[i]);	
    };
});

readStream.on('end', function() {
   // console.log(data);
    console.log("end");
});



// readStream.on('readable', function () {
// 	console.log('readable: ', readStream.read());
//     // var chunk;
//     // while (null !== (chunk = readStream.read())) {
//     //   //console.log(chunk);
//     //   console.log(chunk);
//     // }
//   })
//   .on('end', function () {
//     console.log("end");
//   });

// Processor.parse();
