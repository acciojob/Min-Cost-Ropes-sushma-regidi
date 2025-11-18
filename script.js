function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Continue until only one rope remains
    while (arr.length > 1) {
        // Sort so the two smallest are at the start
        arr.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Cost to connect them
        let cost = first + second;
        totalCost += cost;

        // Push the combined rope back
        arr.push(cost);
    }

    return totalCost;
}




