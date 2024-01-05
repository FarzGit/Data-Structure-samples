class Stack{
    constructor() {
        this.items = []
    }
    isEmpty(){
        return this.items.length === 0
        }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

  

    peak(){
        return this.items[0]
    }

    print(){

            console.log(this.items)
      
    }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()

console.log(stack.pop());
stack.print()

console.log(stack.peak())
console.log(stack.isEmpty())


