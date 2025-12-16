function minCost(arr) {
    if (!arr || arr.length <= 1) return 0;

    // Sort array
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        totalCost += sum;

        // Insert back while keeping array sorted
        let index = arr.findIndex(x => x > sum);
        if (index === -1) {
            arr.push(sum);
        } else {
            arr.splice(index, 0, sum);
        }
    }

    return totalCost;
}

module.exports = minCost;









