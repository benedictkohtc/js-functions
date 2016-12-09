function reverseString (input) {
	var result = '';
	for (var x = input.length - 1; x >= 0; x--) {
		result += input.charAt(x);
	}
	return result;
}

console.log(reverseString('test string'));
