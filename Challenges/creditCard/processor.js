// Get first 2 command line inputs
var inputs = process.argv.slice(2);
console.log('Inputs: ', inputs);

var Processor = {};

// Method to create new Account
Processor.creditCard = function (name, cardNumber, limit) {
	this.name = name;
	this.number = cardNumber;
	this.limit = limit;
}

Processor.parse = function() {
	var name = inputs[1];
	var number = inputs[2];
	var value = inputs[3];

	switch(inputs[0].toLowerCase()) {
		case 'add' :
			console.log("add");
			this[name] = new this.creditCard(name, number, value);
			console.log(this[name]);
			console.log(this);
			break;
		case 'charge' :
			console.log("charge");
			this[name].limit = this[name].limit - number;;
			break;
		case 'credit' :
			console.log("credit");
			break;
	}
}

Processor.parse();
