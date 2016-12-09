function isCharAVowel (input) {
	input = input.toLowerCase();
	if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
		return true;
	} else {
		return false;
	}
}

// console.log(isCharAVowel('E'));
