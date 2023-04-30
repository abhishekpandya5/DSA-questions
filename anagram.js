// string Anagram
// hello -> llheo
// abhi -> haib

// O(n) linear time complexity
function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const map = {};
	for (let letter of str1) {
		if (!map[letter]) {
			map[letter] = 1;
		} else {
			map[letter] = map[letter] + 1;
		}
	}
	for (let letter of str2) {
		if (map[letter]) {
			map[letter] = --map[letter];
		} else {
			return false;
		}
	}
	return true;
}

// better form of code
function checkAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let map = {};
	for (let letter of str1) {
		map[letter] = (map[letter] || 0) + 1;
	}
	for (let letter of str2) {
		if (!map[letter]) {
			return false;
		}
		map[letter] -= 1;
	}
	return true;
}

// map = {h: 1, e: 1, l: 2, 0: 1}
console.log(checkAnagram("hello", "lleho"));
