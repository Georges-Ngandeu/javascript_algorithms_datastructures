class Matrice {
    constructor(dim){
        this.arr = [] 
        this.dim = dim
    }
}

const  setDiagonalMatrice = (matrice, i, j, key) => {
    if(i === j){
        matrice.arr[i-1] = key
    }
    return 
}

const getDiagonalMatrice = (matrice, i, j) => {
    if(i === j){
        return matrice.arr[i-1]
    }else{
        return 0
    }
}

const displayMatrice = (matrice) => {
    for(let i=0; i<matrice.dim; i++){
        for(let j=0; j<matrice.dim; j++){
            if(i === j){
                console.log(matrice.arr[i])
            }else{
                console.log(0)
            }
        }
        console.log('-------------------')
    }

    return 
}

let mat = new Matrice(5)

setDiagonalMatrice(mat, 1, 1, 10) 
setDiagonalMatrice(mat, 2, 2, 20) 
setDiagonalMatrice(mat, 3, 3, 30) 
setDiagonalMatrice(mat, 4, 4, 40) 
setDiagonalMatrice(mat, 5, 5, 50) 

displayMatrice(mat)

console.log(getDiagonalMatrice(mat, 4, 4))