var arr = [];

function rotate(arr) {
	var temp;

	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < i; j++) {
			temp = arr[i][j];
			arr[i][j] = arr[j][i];
			arr[j][i] = temp;
		}
	}
}

arr[0] = [1, 2];
// arr[0][0] = 1;
// arr[0][1] = 2;
arr[1] = [3, 4];
// arr[1][0] = 3;
// arr[1][1] = 4;

console.log(arr[0][0], arr[0][1], arr[1][0], arr[1][1]);
console.log(arr.length);
console.log(arr[0].length);

 rotate(arr);

 console.log(arr[0][0], arr[0][1], arr[1][0], arr[1][1]);