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
	this.limit = parseFloat(limit.replace(/[^0-9-.]/g, ''));
	this.balance = 0;
}

// Takes in a single transaction with
// 3 or 4 inputs
Processor.parse = function(transaction) {
	var inputs = transaction.split(' ');
	 var name = inputs[1];
	// console.log(name);
	 var number = inputs[2];
	// console.log(number);
	 // number = parseFloat(number.replace(/[^0-9-.]/g, ''));
	  //console.log(number);
	 var value = inputs[3];
	  //console.log(value);

	switch(inputs[0].toLowerCase()) {
		case 'add' :
			//console.log("add");
			// Creates new Credit Card Account
			if (this.verify(number)) {
				this[name] = new this.creditCard(name, number, value);
				console.log(this[name]);
				//console.log(this);
			} else {
				console.log("error");
			}
			break;
		case 'charge' :
			//console.log("charge");
			if (this[name]) {
				var charge = this[name].balance + parseFloat(number.replace(/[^0-9-.]/g, ''));
				this[name].balance = (charge > this[name].limit ? this[name].limit : charge);
				console.log(this[name]);
			} else {
				console.log("error");
			}
			break;
		case 'credit' :
			//console.log("credit");
			if (this[name]) {
				this[name].balance -= parseFloat(number.replace(/[^0-9-.]/g, ''));
				console.log(this[name]);
			} else {
				console.log("error");
			}
			break;
	}
}

Processor.summary = function() {
	console.log(this.Lisa.name + ": " + this.Lisa.balance);
	console.log(this.Tom.name + ": " + this.Tom.balance);
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

Processor.verify = function(cardNumber) {
	var account = cardNumber;
	var len = account.length;
	var sum = 0;

	for (var i = len - 2; i >= 0; i -= 2) {
		var num = account[i] * 2;
		if (num > 9) {
			num = 1 + (num - 10);
		}
		account = account.replaceAt(i, num.toString());
		//console.log(num);
		//console.log("account number is " + account);
	};

	for (var j = 0; j < len; j++) {
		sum += Number(account[j]);
	};

	//console.log(sum);

	if ((sum % 10) == 0) {
		return true;
	}
	return false;
};

// Processor.verify = function(cardNumber) {
// 	var account = cardNumber;
// 	var len = account.length;
// 	var sum;
// 	// Double even digits
// 	//var num;
// 	for (var i = 1; i < len; i += 2) {
// 		var num = account[i] * 2;
// 		if (num > 9) {
// 			num = 1 + (num - 10);
// 		}
// 		account[i] = num; // ((num > 9) ? (num = 1 + (num - 10)) : num);
// 		console.log(num);
// 		console.log("account number is " + account[i]);
// 	};

// 	for (var i = 0; i < len; i++) {
// 		sum += parseInt(account.charAt(i), 10);
// 	};

// 	if ((sum % 10) == 0) {
// 		return true;
// 	}
// 	return false;
// }

// console.log("double account number: " + num);
// console.log("adding digits " + num);
// 		console.log("final account number: " + account[i]);
// console.log(account);
// 	console.log(account);

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
    console.log(chunk.toString());
    console.log("hello");
    var lines = data.split('\n');
    for (var i = 0; i < lines.length; i++) {
    	console.log(lines[i]);
    	Processor.parse(lines[i]);	
    };
});

readStream.on('end', function() {
   // console.log(data);
    console.log("end");
    Processor.summary();
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
 // console.log(Processor.verify('4212121212121212'));
// console.log(Processor.verify('79927398713'));