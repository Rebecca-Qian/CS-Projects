// for each character in str1, traverse str2 until find the character
// if reach end of str2 and no match, return false
// assumes strings non empty
// var anagram = function (str1, str2) {
// 	if (str1.length != str2.length) return false;
// 	var len = str1.length;
// 	for (var i = 0; i < len; i++) {
// 		var j = 0;
// 		while (j < len) {
// 			if (j == len - 1) {
// 				return false;
// 			}
// 			if (str1[i] == str2[j]) {
// 				break;
// 			}
// 			j++;
// 		}
// 	}
// 	return true;
// }

// var str1 = "aaa";
// var str2 = "aba";

// console.log(anagram(str1, str2));

function replaceString(str){
	return str.split(' ').join("%20");
}

console.log(replaceString("hello hello"));