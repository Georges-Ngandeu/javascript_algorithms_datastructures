/*

Tree i am creating
    A
   / \
  B   C
 / \ / \
 D E

*/

import {LinkedListQueue} from '../Queue/Queue.js'

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null
        this.queue = new LinkedListQueue()
    }

    insert(data, direction){
        if(this.root = null){
            let temp = new Node(data)
            this.queue.push(temp)
            this.root = temp
        }else{
            let current = this.queue.dequeue()
           

        }

        return this.root
    }
}

