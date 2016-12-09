function sortNumber (a, b) {
	return a - b;
}

function merge (arr1, arr2) {
	var result = arr1.concat(arr2);

	result.sort(sortNumber);
	return result;
}

var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
console.log(merge(arr1, arr2));
