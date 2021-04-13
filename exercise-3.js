let array = [1, true,3, 4, "apple",1, 3, true,6, 4, "apple"]

let deduplicated = array.filter((element, index) => {
    return array.indexOf(element) === index;
})

console.log(deduplicated);
