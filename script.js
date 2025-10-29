function mincost(arr) {
  if (arr.length <= 1) return 0;

  // keep ropes sorted by length
  arr.sort((a, b) => a - b);

  let total = 0;

  while (arr.length > 1) {
    // take the two smallest ropes
    const a = arr.shift();
    const b = arr.shift();

    const cost = a + b;
    total += cost;

    // insert the new rope length back so array stays sorted
    let i = 0;
    while (i < arr.length && arr[i] < cost) i++;
    arr.splice(i, 0, cost);
  }

  return total;
}


