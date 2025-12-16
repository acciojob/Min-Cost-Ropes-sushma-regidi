class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return min;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    _bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function mincost(arr) {
    if (arr.length <= 1) return 0;

    const heap = new MinHeap();

    for (let rope of arr) {
        heap.push(rope);
    }

    let totalCost = 0;

    while (heap.size() > 1) {
        let first = heap.pop();
        let second = heap.pop();
        let cost = first + second;

        totalCost += cost;
        heap.push(cost);
    }

    return totalCost;
}








