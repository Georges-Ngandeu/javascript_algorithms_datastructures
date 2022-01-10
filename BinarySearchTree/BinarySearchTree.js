class Node {
    constructor(key){
        this.left = null
        this.right = null
        this.data = key
    }
}

const binary_search = (root, key) => {
    if(root === null){
        return null
    }

    if(root.data === key){
        return root
    }

    if(root.data < key){
        return binary_search(root.left, key)
    }else{
        return binary_search(root.right, key)
    }
}