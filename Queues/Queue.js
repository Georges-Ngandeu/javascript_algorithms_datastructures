export class Queue {
    constructor(arraySize){
        this.arr = Array(arraySize)
        this.front = -1
        this.rear = -1
        this.arraySize = arraySize
    }

    enqueue(data){
        if(this.rear === this.arraySize - 1){
            throw('Queue is full')
        }
        this.rear++
        this.arr[this.rear] = data
    }

    dequeue(){
        if(this.front === this.rear){
            throw('Queue is empty')
        }
        this.front++
        let elt = this.arr[this.front]
        delete this.arr[this.front]
        return elt
    }

    is_full(){
        return this.rear === this.arraySize - 1
    }

    is_empty(){
        return this.front === this.rear
    }
}

export class CircularQueue {
    constructor(arraySize){
        this.arr = Array(arraySize)
        this.front = 0
        this.rear = 0
        this.arraySize = arraySize
    }

    enqueue(data){
        if((this.rear + 1) % this.arraySize === this.front){
            throw('Queue is full')
        }
        this.rear = (this.rear + 1) % this.arraySize
        this.arr[this.rear] = data
    }

    dequeue(){
        if(this.front === this.rear){
            throw('Queue is empty')
        }
        this.front = (this.front + 1) % this.arraySize
        let elt = this.arr[this.front]
        delete this.arr[this.front]
        return elt
    }

    is_full(){
        return (this.rear + 1) % this.arraySize === this.front
    }

    is_empty(){
        return this.front === this.rear
    }
}

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

export class LinkedListQueue {
    constructor(){
        this.rear = null
        this.front = null
    }

    enqueue(data){
        let temp = new Node(data)
        if(temp === null){
            throw('Queue is full')
        }else if(this.front === null){
            this.rear = temp
            this.front = temp
        }else{
            this.rear.next = temp
            this.rear = temp
        }
    }

    display(){
        let current = this.front
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
        return this.front
    }

    dequeue(){
        if(this.front === null){
            throw('Queue is empty')
        }else{
            let current = this.front
            this.front = this.front.next
            //delete current
            return current.data 
        }
    }

    is_full(){
        let temp = new Node(100)
        if(temp === null){
            throw('Queue is full')
        }

    }

    is_empty(){
        return this.front === null
    }
}

//let queue = new LinkedListQueue()

//queue.enqueue(10)

//console.log('List the queue element', queue.arr)
//console.log('Is queue empty', queue.is_empty())
//console.log('Is queue full', queue.is_full())

// queue.dequeue()
// queue.dequeue()

//console.log('List the queue element', queue.display())

//console.log(queue)

//console.log('List the items', items)

