
class Queue{
    constructor(){
        this.items = {}
        this.rear =0
        this.front =0
    }
    
    enqueue(element){
        
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        this.item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return this.item
    }
    
    peek(){
        return this.items[this.front]
    }
    
    isEmpty(){
        return this.rear - this.front === 0
    }
    
    size(){
        return this.rear - this.front
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
console.log(list.dequeue())

list.print()
