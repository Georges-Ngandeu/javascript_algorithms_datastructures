const readline = require('readline')

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const create_binary_tree = () => {
       
}


const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})

console.log('Enter the root node')
rl.question('Enter the root node', function(data){
    let root = new Node(data)
    console.log(`The root node data is ${root.data}`)
    rl.close()
})

rl.question('Enter the root node', function(data){
    let root = new Node(data)
    console.log(`The root node data is ${root.data}`)
    rl.close()
})

rl.on('close', function(){
    console.log('Done!')
    process.exit(0)
})