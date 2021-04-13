function combineArrays(...arrays){
    let result = []
  
    for (let array of arrays){
        result = result.concat(array)
    }

    return result.sort((a, b) => a - b)
}

let array1 = [1, 6, 8]
let array2 = [5, 22, 4]
let array3 = [2, 13, 7]

console.log(combineArrays(array1, array2, array3))
