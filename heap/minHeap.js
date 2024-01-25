class MinHeap{
    constructor(){
        this.heap = [];
    }
  
    // Function to insert an element into the heap
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }                                            // O(log n)T  O(1)s
  
    // Function to heapify the array from bottom to top
    shiftUp(index){
        while(index > 0){
            const parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] > this.heap[index]){
                this.swap(parentIndex,index)
                index = parentIndex;
            }else{
                break;
            }
        }
    }
  
    // Helper function to swap elements at two indices in the heap
    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
  
    display(){
        console.log(this.heap);
    }// O(n)
  
      // Function to remove the top element from the heap
    remove(){
        if(this.heap.length === 0){
            return null;
        }
        const removeValue = this.heap[0];
        const lastValue = this.heap.pop()
  
        if(this.heap.length>0){
            this.heap[0] = lastValue;
            this.shiftDown(0)
        }
        return removeValue     //O(log n)T   O(1)S
    }
  
     // Function to heapify the array from top to bottom
     shiftDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if ( rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex != index) {
        this.swap(index, smallestIndex);
        this.shiftDown(smallestIndex);
      }
    }
  
     // Function to build a heap from an array
    buildHeap(arr){
        this.heap = [...arr]
          // Start from the last non-leaf node and perform shifDown
          for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
              this.shiftDown(i);
          }
    }// O(n log n)  buildheap (n) +  shiftDown(log n)
  
    parent(index){
        return Math.floor((index-1)/2)
    }
  
    leftChild(index){
        return index * 2 + 1
    }
  
    rightChild(index){
        return index * 2 + 2
    }
  
    peek(){
        return this.heap[0]
    }
    search(value){
      return this.heap.includes(value)
    }
  
  }
  
  const min = new MinHeap()
  
  min.insert(5)
  min.insert(3)
  min.insert(6)
  min.insert(2)
  min.insert(7)
  
  // heap.display()
  // heap.remove()
  min.display()
  
  const arr = [20,10,5,15,13,4,1,7]
  min.buildHeap(arr)
  min.display()
  
  // console.log(heap.rightChild(0));
  // console.log(heap.peek());