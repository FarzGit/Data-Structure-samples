class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getSize () {
    return this.size
  }



  prepend (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }



  append (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }

    this.size++
  }
  insert(value,index){
    if(index<0 || index > this.size){
      return
    }
    if(this.size === 0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i=0; i<index-1; i++){
        prev= prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }



  print () {
    if (this.isEmpty()) {
      console.log('list is empty')
    } else {
      let curr = this.head
      let listValues = ''
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new linkedList()

console.log(list.isEmpty())

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)

list.print()


list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.append(40)
list.prepend(20)

list.insert(90,3)



list.print()

console.log('list size is : ', list.getSize())




// here prepend time complexity is constant
// and append time complexity is linear


























// class Node{
//   constructor(value){
//       this.value = value
//       this.next = null
//   }
// }

// class linkedList{
//   constructor(){
//       this.head=null
//       this.size = 0
//   }
  
//   isEmpty(){
//       return this.size===0
//   }
  
//   prepend(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//           this.head = node
//       }else{
//           node.next = this.head
//           this.head = node
//       }
//       this.size++
//   }
  
//   append(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//           this.head = node
//       }else{
//           let prev = this.head
//           while(prev.next){
//               prev = prev.next
//           }
//           prev.next = node
          
//       }
//       this.size++
//   }
  
//   insert(value,index){
//       if(index<0 || index> this.size){
//           return null
//       }
//       if(this.size===0){
//           this.prepend()
//       }else{
//           const node = new Node(value)
//           let curr = this.head
//           for(let i=0; i<index-1; i++){
//               curr = curr.next
//           }
//           node.next = curr.next
//           curr.next=node
//           this.size++
//       }
      
//   }
//   remove(index){
//       if(index<0 || index>this.size){
//           return null
//       }
//       if(index===0){
//           this.head = this.head.next
//           this.size--
//       }else{
//           let curr = this.head
//           for(let i=0; i<index-1; i++){
//               curr = curr.next
//           }
//           let rem = curr.next
//           curr.next = rem.next
//           this.size--
          
          
//       }
//   }
  
//   removeValue(value){
//       if(this.head.value===value){
//           this.head = this.head.next
//           this.size--
//           return value
//       }else{
//           let curr = this.head
          
//           while(curr.next&& curr.next.value != value){
//               curr.next
//           }
//           if(curr.next){
//               let rem = curr.next
//               curr.next = rem.next
//               this.size--
//               return value
//           }
//           return null
//       }
//   }
  
//   print(){
//       if(this.isEmpty()){
//           console.log('list is empty')
//       }else{
//           let curr = this.head
//           let listValues =''
//           while(curr){
//               listValues += `${curr.value} `
//               curr = curr.next
//           }
//           console.log(listValues)
//       }
//   }
// }

// const list = new linkedList()

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)



// list.print()
// console.log(list.removeValue(40))
// list.print()