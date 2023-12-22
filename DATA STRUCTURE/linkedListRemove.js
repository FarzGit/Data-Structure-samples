class Node{
    constructor(value){
        this.value = value
        this.next= null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next=this.head
            this.head= node
        }
        this.size++
    }

    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let rem
        if(index===0){
            rem=this.head
            this.head = this.head.next
        }else{
            let curr = this.head
            for(let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            rem=curr.next
            curr.next=rem.next  
        }
        this.size--
        return rem.value

    }
    removeValues(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head= this.head.next
            this.size--
            return value
        }else{
            let curr=this.head
            while(curr.next && curr.next.value !== value){
                curr = curr.next
            }
            if(curr.next){
                const rem = curr.next
                curr.next = rem.next
                this.size--
                return value
            }
            return null
        }
    }


    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr = this.head
            let listValues=''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new linkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)



list.print()

console.log(list.removeValues(50))
list.print()


