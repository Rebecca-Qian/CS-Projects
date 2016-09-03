// assume only ascii characters
var checkEqual = function(str) {
	if (str.length > 128) return false;

	for (var i = 0; i < str.length; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] == str[j]) {
				return false;
			}
		}
	}
	return true;
}

var str1 = "abcdefg";
var str2 = "abcdee";

console.log(checkEqual(str1));
console.log(checkEqual(str2));