function findAvarage (arr) {
    let sum = 0
    let countOfNumber =  0
    for(let value of arr) {
        if(typeof value === "number") {
            sum += value
            countOfNumber++
        }
    }
    return sum / countOfNumber
}

findAvarage([10,20,30,"sd",60])