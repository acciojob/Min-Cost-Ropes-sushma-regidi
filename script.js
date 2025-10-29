

function mincost(arr) {
  // If there is only one rope, no cost to connect
  if (arr.length <= 1) return 0;

  // Use a Min-Heap approach (implemented using a sorted array for simplicity)
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Pick the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back into the array maintaining sorted order
    // (binary insert can be used but simple push+sort is fine for N ≤ 1000)
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

