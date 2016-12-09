function letterCount (preInput) {
	var input = preInput.toLowerCase().replace(/[^a-z]/g, '');
	var result = {};
	for (var x = 0; x < input.length; x++) {
		if (result[input[x]] === undefined) {
			result[input[x]] = 1;
		} else {
			result[input[x]] += 1;
		}
	}
	return result;
}
var input = 'bl     ahBLAHbl,.<>*&$ahblah';
console.log(letterCount(input));
