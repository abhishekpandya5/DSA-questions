/* 
count largest sum of consecutive numbers
[1,2,3,4,3,5,4,6,7,8] total elements = 10
num = 4 (4 consecutuve numbers)
*/

//  conditions
// num > array.length -> error msg
// 10 - 4 + 1 = 7 times loop should run

function findLargest(arr, num) {
	if (num > arr.length) {
		throw new Error("Num should not be greater than array length");
	} else {
		let max = 0;
		for (let i = 0; i < arr.length - num + 1; i++) {
			let temp = 0;
			for (let j = 0; j < num; j++) {
				temp = temp + arr[i + j];
			}
			if (temp > max) {
				max = temp;
			}
		}
		return max;
	}
}
const array = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];
const result = findLargest(array, 4);
console.log(result);
