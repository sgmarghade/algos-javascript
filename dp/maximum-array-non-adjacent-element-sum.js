// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

// SOlution 
// To address with DP, work through the array, keeping track of the max at each position until you get to the last value of the array. You should start with the base cases defined before iterating through the remainder of the array.

// max @ position 0: value @ 0

// max @ position 1: either:

// value @ 0
// value @ 1
// from that point forward, the max of the next position is either:

// the current value at that position
// the max value found so far
// the max value from 2 positions back plus the current value
// keep track of the max at each position until you get to the last position of the array


function maxSubsetSum(arr) {
    let maxSoFar = Number.NEGATIVE_INFINITY;
    let positionArr = new Array(arr.length);

    positionArr[arr.length - 1] = arr[arr.length - 1];
    positionArr[arr.length - 2] = Math.max(arr[arr.length - 1], arr[arr.length - 2]);

    maxSoFar = positionArr[arr.length - 2];
    // console.log('First '+maxSoFar);

    for (let i = arr.length - 3; i >= 0; i--) {
        const currentVal = arr[i];
        const adjacentMax = currentVal + positionArr[i + 2];
        const newMax = Math.max(maxSoFar, currentVal, adjacentMax);
        maxSoFar = newMax;
        positionArr[i] = newMax;
       
    }

    return maxSoFar;
}   

console.log(maxSubsetSum([3, 7, 4, 6, 5])); //13
console.log(maxSubsetSum([2, 1, 5, 8, 4])); //11