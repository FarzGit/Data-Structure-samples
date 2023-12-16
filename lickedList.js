// class Node {
//   constructor (value) {
//     this.value = value
//     this.next = null
//   }
// }

// class linkedList {
//   constructor () {
//     this.head = null
//     this.size = 0
//   }

//   isEmpty () {
//     return this.size === 0
//   }

//   getSize () {
//     return this.size
//   }



//   prepend (value) {
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }



//   append (value) {
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       let prev = this.head
//       while (prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }

//     this.size++
//   }



//   print () {
//     if (this.isEmpty()) {
//       console.log('list is empty')
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues)
//     }
//   }
// }

// const list = new linkedList()

// console.log(list.isEmpty())

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)

// list.print()


// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.append(40)
// list.prepend(20)



// list.print()

// console.log('list size is : ', list.getSize())








class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.head=== null){
            this.head = node
        }else{
            node.next=this.head
            this.head = node
        }
    }
    
    append(value){
        const node = new Node(value)
        if(this.head=== null){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next = node
        }
    }
    
    print(){
        if(this.head === null){
            console.log('list is empty')
        }else{
            let curr = this.head
            let listValues = ''
            
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

list.print()

list.append(10)
list.append(20)
list.append(30)

list.print()