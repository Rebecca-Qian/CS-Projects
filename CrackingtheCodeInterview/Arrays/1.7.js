function replaceZero (matrix) {
	//traverse through first row
	//if equal to 0, set row + col to 0
	//increment row + col by 1
	//traverse second row etc.
	if (matrix) {
		var rows = matrix.length;
		var cols = matrix[0].length;

		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				if (matrix[i][j] == 0) {
					//set row to 0
					for (var k = 0; k < cols; k++) {
						matrix[i][k] = 0;
					}
				}
			}
		}
	}
}