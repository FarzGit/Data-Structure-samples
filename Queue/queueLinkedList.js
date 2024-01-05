class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            // If the queue is empty, set both front and rear to the new node
            this.front = this.rear = newNode;
        } else {
            // Otherwise, add the new node to the rear and update the rear pointer
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        // Remove the front node and update the front pointer
        const removedNode = this.front;
        this.front = removedNode.next;

        // If the queue becomes empty after dequeue, update the rear pointer to null
        if (this.front === null) {
            this.rear = null;
        }

        return removedNode.data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }

    display() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Queue:");
myQueue.display(); // Output: 1 2 3

console.log("Dequeue:", myQueue.dequeue()); // Output: 1

console.log("Peek:", myQueue.peek()); // Output: 2

console.log("Queue after dequeue:");
myQueue.display(); // Output: 2 3
