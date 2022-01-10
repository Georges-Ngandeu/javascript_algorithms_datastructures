import {LinkedListQueue} from '../Queues/Queue.js'

class Graph {
    constructor(matrice){
        this.matrice = matrice
        this.queue = new LinkedListQueue()
        this.visited = Array(this.matrice[0].length).fill(0)
    }

    breathFirstSearch(i){
        console.log(i)
        this.visited[i] = 1
        this.queue.enqueue(i)

        while(!this.queue.is_empty()){
            let u = this.queue.dequeue()
            for(let i = 1; i < this.matrice[0].length; i++){
                if(this.matrice[u][i] === 1 && this.visited[i] === 0){
                    console.log(i)
                    this.visited[i] = 1
                    this.queue.enqueue(i)
                }
            }
        }

        return this.visited
    }

    depthFirstSearch(i){
        if(this.visited[i] === 0){
            console.log(i)
            this.visited[i] = 1
            for(let j = 1; j < this.matrice[0].length; j++){
                if(this.matrice[i][j] === 1){
                    this.depthFirstSearch(j)
                }
            }
        }

        return this.visited
    }
}

let matrice = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0]
]

let graph = new Graph(matrice)

//console.log(graph)

//console.log('-------------------')

//console.log(graph.breathFirstSearch(7))

console.log(graph.depthFirstSearch(7))

//graph.breathFirstSearch(1)

