const circularBuffer = new CircularBuffer(5);

circularBuffer.add(1);
circularBuffer.add(2);
circularBuffer.add(3);

console.log(circularBuffer.remove()); 
console.log(circularBuffer.remove()); 

circularBuffer.add(4);
circularBuffer.add(5);

console.log(circularBuffer.remove());
console.log(circularBuffer.remove()); 
console.log(circularBuffer.remove()); 

circularBuffer.remove();

class CircularBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = new Array(capacity).fill(null);
        this.readIndex = 0;
        this.writeIndex = 0;
        this.count = 0;
    }

    add(item) { //adds item to circular buffer
        if (this.isFull()) {
            throw new Error("Buffer is full. Cannot add more items.");
        }

        this.buffer[this.writeIndex] = item;
        this.writeIndex = (this.writeIndex + 1) % this.capacity;
        this.count++;
    }

    remove() { //removes an item from the circular buffer, if buffer is empty it throws an error
        if (this.isEmpty()) {
            throw new Error("Buffer is empty. Cannot remove more items.");
        }

        const item = this.buffer[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;
        this.count--;
        return item;
    }

    peek() { //returns item at readIndex
        if (this.isEmpty()) {
            throw new Error("Buffer is empty. Cannot peek.");
        }

        return this.buffer[this.readIndex];
    }
    //utility methods rea
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
//instance of CircularBuffer
const circularBufferInstance = new CircularBuffer(5);

console.log(circularBufferInstance.isEmpty());

circularBufferInstance.add(1);
circularBufferInstance.add(2);
circularBufferInstance.add(3);

console.log(circularBufferInstance.size());
console.log(circularBufferInstance.isFull());

console.log(circularBufferInstance.peek());

console.log(circularBufferInstance.remove()); 
console.log(circularBufferInstance.size()); 

circularBufferInstance.add(4);
circularBufferInstance.add(5);
circularBufferInstance.add(6); 

console.log(circularBufferInstance.remove()); //removes 2
console.log(circularBufferInstance.remove()); //removes 3
console.log(circularBufferInstance.remove()); //removes 4

console.log(circularBufferInstance.isEmpty()); //true
