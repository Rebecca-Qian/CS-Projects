function isSubarray(arr1, arr2) {
	//create lookup table
	var lookup = {},
	    result = [],
	    len1 = arr1.length,
	    len2 = arr2.length;
	
	for (var i = 0; i < len1; i++) {
		lookup[arr1[i]] = true;
	}
	for (var j = 0; j < len2; j++) {
		var temp = arr2[j];
		if (lookup[temp]) {
			result.push(temp);
			lookup[temp] = false;
		}
	}
	return result;
}

console.log(isSubarray([1, 2, 4, 5], [1, 0, 3, 4]));

