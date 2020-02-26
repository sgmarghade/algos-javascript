// You are given  queries. Each query is of the form two integers described below:
// -  (1, x): Insert x in your data structure.
// -  (2, y): Delete one occurence of y from your data structure, if present.
// -  (3, z): Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.


function freqQuery(queries) {
    const countToIntMap = {}; //map of map
    const intToCountMap = {};
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const operator = query[0];
        const operand = query[1];

        if (operator === 1) {
            if (!intToCountMap[operand]) {
                intToCountMap[operand] = 0;
            }

            const oldCount = intToCountMap[operand];
            const newCount = oldCount + 1;

            intToCountMap[operand] = newCount;
            if (countToIntMap[oldCount] && countToIntMap[oldCount][operand]) {
                delete countToIntMap[oldCount][operand];
            }

            if (!countToIntMap[newCount]) {
                countToIntMap[newCount] = {};
            }

            countToIntMap[newCount][operand] = true;
        }else if (operator === 2) {
            if (intToCountMap[operand]) {
                const oldCount = intToCountMap[operand];
                const newCount = oldCount - 1;

                intToCountMap[operand] = newCount;
                if (countToIntMap[oldCount] && countToIntMap[oldCount][operand]) {
                    delete countToIntMap[oldCount][operand];
                }

                if (!countToIntMap[newCount]) {
                    countToIntMap[newCount] = {};
                }

                countToIntMap[newCount][operand] = true;
            }
        }else if(operator === 3) {
            if (countToIntMap[operand] && Object.keys(countToIntMap[operand]).length > 0)               {
                    result.push(1);
            } else {
                result.push(0);
            }
        }
    } 

    return result;
}

console.log(freqQuery([ [ 1, 5 ],
  [ 1, 6 ],
  [ 3, 2 ],
  [ 1, 10 ],
  [ 1, 10 ],
  [ 1, 6 ],
  [ 2, 5 ],
  [ 3, 2 ] ])); //[0,1]

console.log(freqQuery([ [ 3, 4 ], [ 2, 1003 ], [ 1, 16 ], [ 3, 1 ] ])); //[0, 1]

console.log(freqQuery([ [ 1, 3 ],
  [ 2, 3 ],
  [ 3, 2 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 4 ],
  [ 3, 2 ],
  [ 2, 4 ],
  [ 3, 2 ] ])); //[0,1,1]