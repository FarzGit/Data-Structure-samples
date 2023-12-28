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
        return this.items.length === 0
    }
    
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items)
    }
}

const list = new Queue()

console.log(list.isEmpty())

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)
list.print()
console.log(list.isEmpty())
console.log(list.size())
console.log('removed Element FIFO Principle :' ,list.dequeue())
list.print()