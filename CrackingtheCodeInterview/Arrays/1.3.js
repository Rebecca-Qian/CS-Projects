// function removeDup (str) {
// 	for (var i = 0; i < str.length; i++) {
// 		for (var j = i + 1; j < str.length; j++) {
// 			if (str[i] == str[j]) {
// 				for (var k = j; k < str.length; k++) {
// 					if (k == str.length - 1) {
// 						console.log(str[k]);
// 						str[k] = '';
// 						console.log(str[k]);
// 					}
// 					str[k] = str[k + 1];
// 				}
// 			}
// 		}
// 	}
// 	//return str;
// }

// var str1 = "abbcde";
// removeDup(str1);
// console.log(str1);

//convert string to lower case for sensitivity

function checkPerm (str1, str2) {
	//check types are string
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		throw new Error("checkPerm requires strings to be passed");
	}
	//question: are we including white spaces?
	//are we counting capital/lower case letters?

	//create 1 arrays of 26 ascii characters
	var counts = [];
	//get string lengths
	var str1len = str1.length;
	var str2len = str2.length;
	//check lengths are equal
	if (str1len !== str2len) {
		return false;
	}
	//iterate through str1 and store chars as values in array counts
	for (var i = 0; i < str1len; i++) {
		//convert each char into ascii index
		var index = str1.charCodeAt(i)-97;
		counts[index] = (counts[index] || 0) + 1; //store as 1
	}

	//iterate through str2 and check whether each char exists in counts
	for (var i = 0; i < str1len; i++) {
		var index = str2.charCodeAt(i)-97;
		//if not stored in first array return false
		if (!counts[index]) {
			return false;
		} else {
			//decrement that item so it's 0
			counts[index]--;
		}
	}

	return true;
}

console.log(checkPerm("happy", "pphap"));
