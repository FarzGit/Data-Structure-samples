class Graph{
    constructor(){
        this.list = {}
    }
    
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }
    
    addEdge(vertex1 , vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    
    hasEdge(vertex1,vertex2){
        return this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
    }
    
    removeEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    
    removeVeteices(vertex){
        if(!this.list[vertex]){
                return 
        }
        for(let edge of this.list[vertex]){
            this.removeEdge(edge,vertex)
        }
        
        delete this.list[vertex]
    }
    
    BFS(start){
        const queue = [start]
        const visited = new Set()
        // const result = []
        
        while(queue.length){
            let vertex = queue.shift()
            if(!visited.has(vertex)){
                visited.add(vertex)
                // result.push(vertex)
                
                for(let edge of this.list[vertex]){
                queue.push(edge)
            }
        }
        }
        return visited
    }
    
    DFS(start){
        const stack = [start];
        const visited = new Set();
        const result = []

        while(stack.length){
            const vertex = stack.pop()
            if(!visited.has(vertex)){
                visited.add(vertex);
                result.push(vertex);

                for(let edges of this.list[vertex]){
                    stack.push(edges);
                }
            }
        }
        return result   // O(v+e) T   O(v) S
    }
    
    display(){
        for(let vertex in this.list){
            console.log(vertex + '->'  + [...this.list[vertex]])
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('W')


graph.addEdge('A','B')
graph.addEdge('C','A')
graph.addEdge('B','C')
graph.addEdge('A','B')
graph.addEdge('A','W')

graph.display()

console.log(graph.hasEdge('A','C'))

// graph.removeEdge('A','B')

// graph.display()

// graph.removeVeteices('B')



graph.display()

// graph.BFS('A')

console.log(graph.BFS('A'))

console.log(graph.DFS('W'))

















