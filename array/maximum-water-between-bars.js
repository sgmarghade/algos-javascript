// Given array value as bar height in bar graph, find out maximum awater can be stored in gaps formed between bars.

function findHigherOrEqual(start, end, arr) {
    const startValue = arr[start];
    let next = -1;

    while(end < arr.length) {
        if (arr[end] >= startValue) {
            next = end;
            break;
        }

        end++;
    }

    return next;
}

function findSlop(start, end, arr) {
    let next = -1;
    while(end < arr.length) {
        if (arr[end] < arr[end - 1]) {
            end++;
        } else {
            break;
        }
    }

    end = end - 1;
    console.log(end);
    while(end < arr.length - 1) {
        if (arr[end] < arr[end + 1]) {
            next = end+1;
            end++;
        } else {
            break;
        }
    }
    console.log('next end ', next, end);
    return next;
}

function findMaxWater(arr) {
    let start = 0;
    let end = 1;

    let total = 0;

    while(start < arr.length - 1) {
        let next = findHigherOrEqual(start, end, arr);
        if (next === -1) {
            next = findSlop(start, end, arr);
        }
        
        if (next === -1) {
            break;
        }

        const min = Math.min(arr[start], arr[next]);
        let cursor = start+1;
        while(cursor < next) {

            let gap = min - arr[cursor];
            if (gap >=0 ) {
                total += gap;
            }
            cursor++;
        }

        start = next;
        end = next+1;
    }

    return total;
}

// console.log(findMaxWater([8,5,3,5,2])); //2
// console.log(findMaxWater([8,5,3,7,2,5]));