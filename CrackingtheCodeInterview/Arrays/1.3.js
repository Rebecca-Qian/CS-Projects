function removeDup (str) {
	for (var i = 0; i < str.length; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] == str[j]) {
				for (var k = j; k < str.length; k++) {
					if (k == str.length - 1) {
						console.log(str[k]);
						str[k] = '';
						console.log(str[k]);
					}
					str[k] = str[k + 1];
				}
			}
		}
	}
	//return str;
}

var str1 = "abbcde";
removeDup(str1);
console.log(str1);