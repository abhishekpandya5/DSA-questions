// Count unique number
// [1,1,2,3,3,4,4,5,6,7,8,8]
// output -> 8

const arr1 = [1, 10, 9, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8];

// using predefind method -> Set
function countUnique1() {
	console.log(new Set(arr1).size);
}

// core logic
function countUnique2() {
	const map = {};
	for (let num of arr1) {
		if (!map[num]) map[num] = true;
	}
	const result = Object.keys(map).length;
	console.log(result);
}

countUnique2();
