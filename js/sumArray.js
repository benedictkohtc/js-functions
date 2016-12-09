function sumArray (input) {
	var result = 0;
	for (var x = 0; x < input.length; x++) {
		result += input[x];
	}
	return result;
}

function multiplyArray (input) {
	var result = 1;
	for (var x = 0; x < input.length; x++) {
		result *= input[x];
	}
	return result;
}

var input = [1, 2, 3, 4, 5];
console.log('Sum of array is ', sumArray(input));
console.log('Product of array is ', multiplyArray(input));
