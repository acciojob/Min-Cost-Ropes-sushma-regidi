function mincost(arr) {
    // If there's only one rope, no cost to connect anything
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Repeat until only one rope remains
    while (arr.length > 1) {
        // Sort array to bring two smallest to front
        arr.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Cost to combine
        let cost = first + second;
        totalCost += cost;

        // Push the combined rope back
        arr.push(cost);
    }

    return totalCost;
}





