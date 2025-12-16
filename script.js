function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Sort the array initially
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert the combined rope back
        arr.push(cost);

        // Re-sort to keep smallest at front
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}







