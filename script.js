function mincost(arr) {
  // If there is only one rope, no cost needed
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Keep combining ropes until one rope remains
  while (arr.length > 1) {
    // Sort to get the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take the two smallest
    const first = arr.shift();
    const second = arr.shift();

    // Cost of connecting them
    const newRope = first + second;
    cost += newRope;

    // Insert the new rope back
    arr.push(newRope);
  }

  return cost;
}



