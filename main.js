// #1
var tripleFive = function() {
	for (var i = 0; i < 3; i++) {
		console.log('Five!');
	}
}

// #2
var lastLetter = function(string) {
	var last = string.charAt(string.length - 1);
	return last;
}

// #3
var square = function(number) {
	var answer = number * number;
	return answer;
}

// #4
var negate = function(number) {
	var answer = 0 - number;
	return answer;
}

// #5
var toArray = function(x, y, z) {
	var asArray = [x, y, z];
	return asArray;
}

// #6
var startsWithA = function(word) {
	return word.charAt(0).toLowerCase() === 'a'; 
}

// #7
var excite = function(string) {
	return string + '!!!';
}

// #8
var sun = function(string) {
	for (i = 0; i < (string.length - 2); i++) {
		// console.log(i, i + 3, string.substring(i, i + 3), string.length - 3);
		var isSun = string.substring(i, i + 3) === 'sun'
		if (isSun === true) {
			return isSun;
		}
	} return isSun;
}

// #8 Alternative
var sunAlt = function(string) {
	if (string.toLowerCase().indexOf('sun') >= 0) {
		return true;
	} return false;

}

// #9
var tiny = function(number) {
	return (number <= 1 && number >= 0);
}

// #10
var getSeconds = function(mmColonss) {
	console.log(Number(mmColonss.substring(0,2) * 60) + Number(mmColonss.substring(3, 5)));
}
