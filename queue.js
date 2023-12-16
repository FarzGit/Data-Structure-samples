class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length ===0
    }
    peek(){
        if(!this.isEmpty()){

            return this.items[2]

        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
console.log(queue.size())
console.log(queue.peek())
console.log(queue.dequeue())

