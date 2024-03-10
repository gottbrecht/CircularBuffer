class CircularQueue {
    constructor(size) {
        this.size = size;
        this.buffer = new Array(size).fill(null);
        this.readIndex = 0;
        this.writeIndex = 0;
    }

    add(item) {

        if ((this.writeIndex + 1) % this.size === this.readIndex) {
            console.log("Queue is full. Cannot add more items.");
        } else {
            this.buffer[this.writeIndex] = item;
            this.writeIndex = (this.writeIndex + 1) % this.size;
        }
    }
}
