function reverse(str) {
	var buf;
	buf = "/";
	for (var i = 1; i <= str.length; i++) {
		buf = buf.concat(str[str.length - i]);
	}
	return buf;
}

var str1 = "abcd";
var str2 = "ee";
var str3 = "aabdfg";
var str4="";

console.log(reverse(str1));
console.log(reverse(str2));
console.log(reverse(str3));
console.log(reverse(str4));