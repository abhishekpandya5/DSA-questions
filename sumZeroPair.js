// O(n^2)
function findSumPairZero(arr) {
	for (let number of arr) {
		for (let j = 1; j < arr.length; j++) {
			if (number + arr[j] === 0) {
				return [number, arr[j]];
			}
		}
	}
}

// O(n)
function findSumPairZero1(arr) {
	let left = 0,
		right = arr.length - 1;
	while (left < right) {
		if (arr[left] + arr[right] === 0) {
			return [arr[left], arr[right]];
		} else if (arr[left] + arr[right] < 0) {
			left++;
		} else if (arr[left] + arr[right] > 0) {
			right--;
		}
	}
}

const arr = [-5, -4, -2, 1, 2, 3, 4, 8, 10, 20, 100];
const result = findSumPairZero1(arr);

console.log(result);
