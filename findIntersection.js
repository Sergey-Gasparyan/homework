function findIntersection (arr1 , arr2) { 
    let result = []
    for(let value of arr1) {
        if(arr2.includes(value) && !result.includes(value)) result.push(value)
    }
    return result
}

findIntersection([1 ,"a",4,4,6,6,5,6], [3, 4, 5, 6,7])