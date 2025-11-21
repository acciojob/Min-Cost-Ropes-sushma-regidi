function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Min-heap implementation using a priority queue
    class MinHeap {
        constructor() { this.data = []; }
        
        push(val) {
            this.data.push(val);
            this._up(this.data.length - 1);
        }
        
        pop() {
            if (this.data.length === 1) return this.data.pop();
            const top = this.data[0];
            this.data[0] = this.data.pop();
            this._down(0);
            return top;
        }
        
        size() { return this.data.length; }
        
        _up(i) {
            let parent = Math.floor((i - 1) / 2);
            while (i > 0 && this.data[i] < this.data[parent]) {
                [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
                i = parent;
                parent = Math.floor((i - 1) / 2);
            }
        }
        
        _down(i) {
            const n = this.data.length;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && this.data[left] < this.data[smallest]) smallest = left;
                if (right < n && this.data[right] < this.data[smallest]) smallest = right;

                if (smallest !== i) {
                    [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
                    i = smallest;
                } else break;
            }
        }
    }

    const heap = new MinHeap();
    
    // Load all ropes into the heap
    for (const len of arr) heap.push(len);

    let totalCost = 0;

    // Always combine the two smallest ropes
    while (heap.size() > 1) {
        const first = heap.pop();
        const second = heap.pop();
        const cost = first + second;

        totalCost += cost;
        heap.push(cost);
    }

    return totalCost;
}






