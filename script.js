const circularQueue = new CircularQueue(5);

circularQueue.add(1);
circularQueue.add(2);
circularQueue.add(3);

console.log(circularQueue.remove()); 
console.log(circularQueue.remove()); 

circularQueue.add(4);
circularQueue.add(5);

console.log(circularQueue.remove());
console.log(circularQueue.remove()); 
console.log(circularQueue.remove()); 

circularQueue.remove();

class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity).fill(null);
        this.readIndex = 0;
        this.writeIndex = 0;
        this.count = 0;
    }

    add(item) {
        if (this.isFull()) {
            throw new Error("Buffer is full. Cannot add more items.");
        }

        this.buffer[this.writeIndex] = item;
        this.writeIndex = (this.writeIndex + 1) % this.capacity;
        this.count++;
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty. Cannot remove more items.");
        }

        const item = this.buffer[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;
        this.count--;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty. Cannot peek.");
        }

        return this.buffer[this.readIndex];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    size() {
        return this.count;
    }

    getCapacity() {
        return this.capacity;
    }
}

const circularBuffer = new CircularBuffer(5);

console.log(circularBuffer.isEmpty());

circularBuffer.add(1);
circularBuffer.add(2);
circularBuffer.add(3);

console.log(circularBuffer.size());
console.log(circularBuffer.isFull());

console.log(circularBuffer.peek());

console.log(circularBuffer.remove()); 
console.log(circularBuffer.size()); 

circularBuffer.add(4);
circularBuffer.add(5);
circularBuffer.add(6); 

console.log(circularBuffer.remove()); //removes 2
console.log(circularBuffer.remove()); //removes 3
console.log(circularBuffer.remove()); //removes 4

console.log(circularBuffer.isEmpty()); //true
