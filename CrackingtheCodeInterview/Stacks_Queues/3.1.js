// Describe how you would use a single array to implement three stacks
// fixed amount of space for each stack: simpler, but when one stack
// runs out of space, others are nearly empty
// dynamic/flexible space allocation: more complex
// push and pop data
// create Stack object constructor
// function Stack() {
// 	this._size = 0; /* empty stack */
// 	this._storage = {}; /* storage enables each instance to have own container */
// }

// // add method to push data
// Stack.prototype.push = function(data) {
// 	var size = this._size++; /* increase size of storage */
// 	this._storage[size] = data;
// }

// in JS, there are predefined stack and queue operations
// var stack = [];
// stack.push(1);
// stack.push(20);
// stack.pop();

// pointless to do fixed JS array
// dynamic arrays
// Create initial Stack
var Stack = function() {
	this.index = 0;
	this.stackptr = [-1, -1, -1]; // top of stacks
	this.arr = [];
}

// Push method
Stack.prototype.push = function(stacknum, data) {
	var lastIndex = this.stackptr[stacknum];
	this.stackptr[stacknum] = this.index;
	this.index++;
	this.buffer[lastIndex] = data;
}
// Pop method