class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

const create_linked_list = (arr) => {
    let last = null
    let temp = null
    let first = new Node(arr[0])
    last = first

    for(i=1; i<arr.length; i++){
        temp = new Node(arr[i])
        last.next = temp
        last = temp
    }

    console.log(first)

    return first
}

const display_linked_list = (first) => {
    let current = first
    while(current !== null){
        console.log(current.data)
        current = current.next
    }
}

const display_linked_list_rec = (current) => {
    if(current !== null){
        console.log(current.data)
        display_linked_list_rec(current.next)
    }
}

const counting_nodes_linked_list = (first) => {
    let current = first
    let count = 0
    while(current !== null){
        count++
        current = current.next
    }

    return count
}

const counting_nodes_linked_list_rec = (first) => {
    if(first === null){
        return 0
    }else {
        return counting_nodes_linked_list_rec(first.next) + 1
    }
}

const sum_nodes_values_linked_list = (first) => {
    let current = first
    let sum = 0
    while(current !== null){
        sum += current.data
        current = current.next
    }

    return sum
}

const sum_nodes_values_linked_list_rec = (first) => {
    if(first === null){
        return 0
    }else {
        return sum_nodes_values_linked_list_rec(first.next) + first.data
    }
}

const find_max_linked_list = (first) => {
    let current = first
    let max = -Infinity
    while(current !== null){
        if(current.data > max){
            max = current.data
        }
        current = current.next
    }

    return max
}

const find_min_linked_list = (first) => {
    let current = first
    let min = Infinity
    while(current !== null){
        if(current.data < min){
            min = current.data
        }
        current = current.next
    }

    return min
}

const search_linked_list = (first, key) => {
    let current = first
    while(current !== null){
        if(current.data === key){
            return true
        }
        current = current.next
    }

    return false
}

const search_linked_list_rec = (first, key) => {
    if(first === null){
        return false
    }

    if(key === first.data){
        return true
    }
    
    return search_linked_list_rec(first.next, key)
}

const search_linked_list_improv = (first, key) => {
    let current = first
    let previous = null
    while(current !== null){
        if(current.data === key){
            previous = current.next
            current.next = first
            first = current
            return first
        }
        previous = current
        current = current.next
    }

    return false
}

const insert_node = (first, key, pos) => {

    if(pos < 0 || pos > counting_nodes_linked_list(first)){
        return
    }

    if(pos === 0){
        let temp = new Node(key)
        temp.next = first
        first = temp
        return first
    } else {
        let current = first
        while(pos > 1){
            current = current.next
            pos--
        }
        let temp = new Node(key)
        temp.next = current.next
        current.next = temp
        return first
    }
}

const insert_last = (key, first = null) => {
    let current = new Node(key)
    if(first === null){
        first = current
        last = current
    }else {
        last.next = current
        last = current
    }

    return first
} 

const insert_sorted_linkedlist = (key, first) => {
    let current = first
    let previous = null

    while(current !== null && current.data < key){
        previous = current
        current = current.next
    }

    let temp = new Node(key)
    temp.next = current
    previous.next = temp

    return first
}

const delete_first_node = (first) => {
    let current = first
    first = first.next
    delete current
   
    return first
}

const delete_node = (first, pos) => {

    if(pos < 1 ){
        return -1
    }

    if(pos === 1){
        let current = first
        first = first.next
        delete current
    }else{
        let current = first
        let previous = null
        while(current !== null && pos > 1){
            previous = current
            current = current.next
            pos--
        }

        previous.next = current.next
        delete current
    } 

    return first
}

const is_list_sorted = (first) => {
    let current = first
    let previous = first
    while(current !== null){
        if(previous.data > current.data){
            return false
        }
        previous = current
        current = current.next
    }

    return true
}

const remove_duplicate = (first) => {
    let current = first.next
    let previous = first

    while(current !== null){
        if(previous.data === current.data){ 
            previous.next = current.next
            delete current
            current = previous.next
        }
        previous = current
        current = current.next
    }

    return first
}

//let first = create_linked_list([1, 2, 3, 4, 5])

first = insert_last(0) 
first = insert_last(1, first) 
first = insert_last(1, first) 
first = insert_last(2, first) 
first = insert_last(2, first) 
first = insert_last(3, first) 
first = insert_last(3, first) 
first = insert_last(9, first) 

display_linked_list(first)
first = remove_duplicate(first)

console.log('--------------------------------')

//console.log('result: ', is_list_sorted(first))
display_linked_list(first)