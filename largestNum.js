function findLargest(arr) {
    let maximal = 0 //12
    for(let value of arr) {
        if(value > maximal) maximal = value 
    }
    return maximal
}
findLargest([12,6,20,-6,900,0])