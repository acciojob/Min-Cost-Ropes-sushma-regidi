function mincost(arr) {
  if (arr.length <= 1) return 0; // no cost if 0 or 1 rope

  // Min-heap using a simple priority queue approach
  // Sort initially
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // insert sum back in sorted order
    // binary insert for efficiency
    let index = arr.findIndex(x => x > sum);
    if (index === -1) {
      arr.push(sum);
    } else {
      arr.splice(index, 0, sum);
    }
  }

  return cost;
}

// Examples
console.log(mincost([4, 3, 2, 6]));    // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33

