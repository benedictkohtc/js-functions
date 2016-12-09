function isPrime (input) {
	var result = false;
	var factorCount = 0;
	for (var x = 1; x <= input; x++) {
		if (input % x === 0) {
			console.log('factor of', x, 'found');
			factorCount += 1;
		}
	}
	if (factorCount === 2) {
		console.log('only found 2 factors,', input, 'is prime');
		result = true;
	}
	return result;
}
var input = 21;
console.log(isPrime(input));
