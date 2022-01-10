export class ArrayStack {
    constructor(arraySize){
        this.arraySize = arraySize
        this.arr = Array(arraySize)
        this.top = -1
    }

    is_full(){
        return this.top === this.arraySize - 1
    }

    is_empty(){
        return this.top === -1
    }

    push(data){
        if(this.top === this.arraySize - 1){
            throw('Stack is full')
        }else{
            this.top++
            this.arr[this.top] = data
        }
    }

    pop(){
        if(this.top === -1){
            throw('Stack is empty')
        }else{
            let data = this.arr[this.top]
            delete this.arr[this.top]
            this.top--
            return data
        }
    }

    peek(index){
        if(index >=1 && index <= this.arraySize){
            return this.arr[this.top - index + 1]
        }else{
            throw('Bad index')
        }
    }

    stackTop(){
        return this.arr[this.top]
    }
}

export class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

export class LinkedListStack {
    constructor(){
        this.top = null
    }

    push(data){
        let temp = new Node(data)
        if(temp === null){
            throw('Stack is full')
        }else{
            temp.next = this.top
            this.top = temp
            return this.top
        }
    }

    pop(){
        if(this.top === null){
            throw('Stack is empty')
        }else{
            let current = this.top
            this.top = this.top.next
            //delete current
            return this.top
        }
    }

    is_empty(){
        return this.top === null
    }

    is_full(){
        let temp = new Node(100)
        if(temp === null){
            return true
        }else{
            return false
        }
    }

    stackTop(){
        if(this.top === null){
            throw('Stack is empty')
        }else{
            return this.top.data
        }
    }

    peek(index){
        let current = this.top
        let pos = 1
        while(pos < index  && current !== null){
            current = current.next
            pos = pos + 1
        }

        if(current === null){
            throw('Bad index')
        }else{
            return current.data
        }
    }

    display(){
        let current = this.top
        while(current !== null){
            console.log(current.data)
            current = current.next

        }
        return this.top
    }
}

// let stack = new LinkedListStack(5)

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)   

// console.log(stack.display())
// console.log('------------------------')

// console.log(stack.display())
// console.log('Stack top', stack.peek(7))
