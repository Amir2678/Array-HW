let result = []
function flatten(array){

    for(let item = 0; item < array.length; item++){
        if(typeof array[item] == "object"){
            flatten(array[item])
        }
        else{
            result.push(array[item])
        }
    }
    return result
}

let numbers = [[2,3],5,[[[2,9],4],4],1,0]

flatten(numbers)
console.log(result.sort((a, b) => a - b)) // gives us the flattened and sorted array