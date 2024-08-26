function flattenArray (array) {
    let result = []
    function checkIsValueArray (value) {
        if(typeof value !== "object") result.push(value)
        else {
            for(let i = 0 ; i < value.length ; i++) {
                checkIsValueArray(value[i])
            }
        }
    }
    for(let value of array) {
        checkIsValueArray(value)
    }
   
    return result
}

flattenArray([1, [2, [3, [4]]], 5])

