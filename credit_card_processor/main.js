
// Import modules
var fs = require('fs'),
	readline = require('readline'),
	Processor = require('./processor.js'),
	testInput = process.argv.splice(2);

// Readline Interface
var rl;

if (testInput[0]) {
	var addr = process.cwd() + "/" + testInput;

	// Create read stream with test file input
	var readStream = fs.createReadStream(addr);
	rl = readline.createInterface({
  		input: readStream,
  		output: process.stdout,
  		terminal: false
  	});
} else {
	rl = readline.createInterface({
		input: process.stdin, 
		output: process.stdout,
		terminal: false
	});
}

rl.on('line', function(line) {
	Processor.parse(line);
}).on('error', function(e) {
	console.log("error reading from input");
});

rl.on('close', function() {
	console.log("Summary: ");
	Processor.summary();
});