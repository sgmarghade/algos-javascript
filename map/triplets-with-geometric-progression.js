// You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

// arr: an array of integers
// r: an integer, the common ratio

function countTriplets(arr, r) {

	const map = {

	};
	arr.forEach((number) => {
		if (!map[number]) {
			map[number] = 0;
		}

		map[number]++;
	});

	let total = 0;

	Object.keys(map).forEach((number) => {
		if (map[number] && map[number * r] && map[number * r * r]) {
			total += (map[number] * map[number * r] * map[number * r * r]);
		}
	});	

	return total;
}

console.log(countTriplets([1, 5, 5, 25, 125], 5)); //4
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)); //6
