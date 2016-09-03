var multiply = function(x) {
	if (arguments.length == 1) {
		return x * function(y) {
			return y * function(z) {
				return z;
			}
		}
	}
	return arguments[0] * arguments[1] * arguments[2];
}

// var multiply = function(x) {
// 	if (arguments.length == 1) {

// 	}
// }

// function recurse(x){
// 	return function()
// }

// recurse.apply(null, args);