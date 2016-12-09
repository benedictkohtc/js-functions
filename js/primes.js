function isPrime (input) {
	var result = false;
	var factorCount = 0;
	for (var x = 1; x <= input; x++) {
		if (input % x === 0) {
			factorCount += 1;
		}
	}
	if (factorCount === 2) {
		result = true;
	}
	return result;
}

function primes () {
	var result = [];
	for (var x = 1; x < 100; x++) {
		var isItPrime = isPrime(x);
		if (isItPrime === true) {
			result.push(x);
		}
	}
	return result;
}
console.log(primes());
