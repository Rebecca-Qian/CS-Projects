//store original string length
//count variable
//buffer to store new string
//iterate through string
//store first char
//if next char the same then count++
//store number

function strCompress(str) {
	var len = str.length;
	var counts = 1;
	var newstr = "";

	if (typeof str !== "string") {
		throw new Error("type must be string");
	}

	var char = str[len - 1];

	for (var i = 0; i < len; i++) {
		if (str[i] == char && str[i + 1] == char) {
			counts++;
		} else {
			newstr = newstr.concat(str[i], counts.toString());
			counts = 1;
			char = str[i + 1];
		}
	}
	return newstr;
}

console.log(strCompress("aaabbccda"));