function sillySum (input) {
	var result = 0;
	for (var x = 0; x < input.length; x++) {
		result += (input[x] * x);
	}
	return result;
}

var input = [1, 2, 3, 4, 5];
console.log(sillySum(input));
