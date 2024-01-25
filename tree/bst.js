
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        const node = new Node(value)
        
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root , node)
        } 
        
    }
     
    insertNode(root, node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
            return true
        }else if(value<root.value){
            return this.search(root.left , value)
        }else{
            return this.search(root.right , value)
        }
        }
        
    }
    
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    levelOrder(){
        let queue = []
        
        queue.push(this.root)
        
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            
            if(curr.left){
                queue.push(curr.left)
            }
            
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(root.left === null){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}

const bst = new binarySearchTree()


    bst.insert(6)
    bst.insert(5)
    bst.insert(8)
    bst.insert(2)
    bst.insert(15)
    bst.insert(7)
// console.log(bst.search(bst.root,8))
// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,6))
// console.log(bst.search(bst.root,5))
bst.levelOrder()


// console.log(bst.preOrder(bst.root))

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))


// console.log(bst.isEmpty())