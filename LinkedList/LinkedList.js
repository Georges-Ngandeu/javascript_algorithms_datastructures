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

// const sum_nodes_values_linked_list_rec = (first) => {
//     if(first === null){
//         return 0
//     }else {
//         return counting_nodes_linked_list_rec(first.next) + first.data
//     }
// }


let first = create_linked_list([1, 2, 3, 4, 5])

display_linked_list_rec(first)

//console.log('Count: ',counting_nodes_linked_list_rec(first))
console.log('Sum: ', sum_nodes_values_linked_list(first))