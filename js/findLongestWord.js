function findLongestWord (input) {
	var longestLength = '';
	var longestIndex = '';
	var result = '';
	for (var x = 0; x < input.length; x++) {
		if (input[x].length > longestLength) {
			longestLength = input[x].length;
			longestIndex = x;
		}
	}
	result = input[longestIndex];
	return longestLength;
}

var input = ['Which', 'is', 'the', 'longest'];
console.log(findLongestWord(input));
