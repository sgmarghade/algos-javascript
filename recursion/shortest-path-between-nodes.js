
function createLink(currentChar, nextNodes, map, lastChar) {
    let nodes = [];  
    nextNodes.forEach((node) => {
        if (node === lastChar) {
            nodes.push([currentChar, node]);
        }else {
            const newLinks = createLink(node, map[node], map, lastChar);
            newLinks.forEach((link) => {
                nodes.push([currentChar, ...link]);
            });
        }
    })    

    // console.log(currentChar, nextNodes, nodes);
    return nodes;
}

function ShortestPath(strArr) { 
  const total = parseInt(strArr[0]);
  let i = 1;
  let map = {};
  let firstChar = strArr[1];
  let lastChar = strArr[total];

  for(;i <= total; i++) {
    map[strArr[i]] = [];
  }

  for(;i < strArr.length; i++) {
      const connections = strArr[i].split('-');
      map[connections[0]].push(connections[1]);
  }

 const nodes = map[firstChar];
  const finalList = createLink(firstChar, nodes, map, lastChar);
  let minArr = [];

  finalList.forEach((input) => {
    if (input[0] === firstChar && input[input.length - 1] === lastChar) {
      if (!minArr.length) {
        minArr = input;
      } else if (minArr.length > input.length) {
        minArr = input;
      }
    }
  });

  return minArr.join('-');
  
  // console.log(map, firstChar, lastChar);
  // console.log(finalList);
}
   
// keep this function call here 
console.log(ShortestPath(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]));