// Import file system module
var fs = require('fs');

var addr = process.cwd() + "/test.txt";

var Processor = {};

// Method to create new Account
// Removes non-integers from currency input for card limit
Processor.creditCard = function (name, cardNumber, limit) {
	this.name = name;
	this.number = cardNumber;
	this.limit = parseFloat(limit.replace(/[^0-9-.]/g, ''));
	this.balance = 0;
}

Processor.accounts = {};

// Executes an add, charge or credit transaction
// Parses a single line from text file with
// 3 or 4 inputs
Processor.parse = function(transaction) {
	var inputs = transaction.split(' '),
		name = inputs[1],
		number = inputs[2],
		value = inputs[3];

	switch(inputs[0].toLowerCase()) {
		case 'add' :
			// Creates new valid Credit Card Account
			if (this.verify(number)) {
				this.accounts[name] = new this.creditCard(name, number, value);
				console.log(this.accounts[name]);
			} else {
				console.log("error");
			}
			break;

		case 'charge' :
			// Caps charge at credit card limit
			if (this.accounts[name]) {
				var charge = this.accounts[name].balance + parseFloat(number.replace(/[^0-9-.]/g, ''));
				if (charge < this.accounts[name].limit) {
					this.accounts[name].balance = charge;
				}
				console.log(this.accounts[name]);
			} else {
				console.log("error");
			}
			break;

		case 'credit' :
			if (this.accounts[name]) {
				this.accounts[name].balance -= parseFloat(number.replace(/[^0-9-.]/g, ''));
				console.log(this.accounts[name]);
			} else {
				console.log("error");
			}
			break;
	}
}

// Prints summary of records
Processor.summary = function() {
	for (var acc in this.accounts) {
		if (this.accounts.hasOwnProperty(acc)) {
			console.log(acc + ": " + this.accounts[acc].balance);
		}
	}
}

// Since Javascript strings are immutable,
// Modify prototype with replaceDigit method
// that replaces a character at a given index
String.prototype.replaceDigit = function(index, digit) {
    var res = this.substr(0, index) + digit + this.substr(index + digit.length);
    return res;
}

// Luhn 10 verification algorithm
Processor.verify = function(cardNumber) {
	var account = cardNumber,
		len = account.length,
		sum = 0;

	// Starting from right, double every other digit
	// And add digits for numbers greater than 9
	for (var i = len - 2; i >= 0; i -= 2) {
		var num = account[i] * 2;
		if (num > 9) {
			num = 1 + (num - 10);
		}
		account = account.replaceDigit(i, num.toString());
	};

	// Credit card nmber is valid if sum divides 10,
	// Invalid otherwise
	for (var j = 0; j < len; j++) {
		sum += Number(account[j]);
	};

	if ((sum % 10) == 0) {
		return true;
	}
	return false;
};

// Creates read stream with test file input
var readStream = fs.createReadStream(addr);

var data = '';

readStream.on('data', function(chunk) {
    data += chunk;
    // console.log(chunk.toString());
    // console.log("hello");
    var lines = data.split('\n');

    for (var i = 0; i < lines.length; i++) {
    	//console.log(lines[i]);
    	Processor.parse(lines[i]);	
    };
});

readStream.on('end', function() {
   // console.log(data);
    console.log("Summary: ");
    Processor.summary();
});