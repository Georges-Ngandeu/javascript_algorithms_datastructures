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

let first = create_linked_list([1, 2, 3, 4, 5])

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

display_linked_list_rec(first)