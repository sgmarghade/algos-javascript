// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

// For example , the list of all anagrammatic pairs is  at positions  respectively.

// Function Description

// Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .

// sherlockAndAnagrams has the following parameter(s):

// s: a string .
//Eg: mom = [m,m], [mo, om]

function sherlockAndAnagrams(s) {
	const map = {}; //map of key and total occurrance
	for (let start=0; start < s.length; start++) {
		for (let end = start + 1; end <= s.length; end++) {
			const word = s.slice(start,end).split('').sort().join('');
			if (!map[word]) {
				map[word] = 0;
			}

			// console.log(start, end, word);

			map[word]++;
		}
	}

	let total = 0;
	console.log(map);
	Object.keys(map).forEach((key) => {
		const count = map[key];
		if (count > 1) {
			let val = 0;
			for(let i = count - 1; i > 0; i--) {
				val = val + i;
			}
			total += val;
		}
	});

	return total;
}

console.log(sherlockAndAnagrams('ifailuhkqq')); //3
console.log(sherlockAndAnagrams('kkkk')); //10
console.log(sherlockAndAnagrams('mom')); //2
