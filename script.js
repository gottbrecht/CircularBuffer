class CircularQueue {
    constructor(size) {
        this.size = size;
        this.buffer = new Array(size).fill(null);
        this.readIndex = 0;
        this.writeIndex = 0;
    }
