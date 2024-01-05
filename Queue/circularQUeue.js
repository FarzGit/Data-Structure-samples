class circularQueue {
  constructor (capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0
    this.rear = -1
    this.front = -1
  }

  isFull () {
    return this.currentLength === this.capacity
  }

  isEmpty () {
    return this.currentLength === 0
  }

  enqueue (element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = element
      this.currentLength += 1
      if (this.front === -1) {
        this.front = this.rear
      }
    }
  }

  dequeue () {
    if (this.isEmpty()) {
      return null
    }

    let item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1

    if (this.isEmpty()) {
      this.rear = -1
      this.front = -1
    }
    return item
  }

  peek () {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
  }

  print () {
    if (this.isEmpty()) {
      console.log('queue is empty')
    } else {
      let i
      let str = ''

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' '
      }
      str += this.items[i]

      console.log(str)
    }
  }
}

const list = new circularQueue(5)

console.log(list.isFull())
console.log(list.isEmpty())

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)


list.print()

console.log(list.dequeue())
list.print()
list.enqueue(50)
list.print()

list.print()










