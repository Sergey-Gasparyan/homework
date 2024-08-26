function sortObjects (array,str) {
    let result = []
    let ageInArr = []
    for(let value of array) {
        ageInArr.push(value[str])
    }

    ageInArr.sort((a,b) => a- b)

    for(let i = 0 ; i < ageInArr.length ; i++) {
        for(let j = 0; j < array.length ; j++) {
            if(ageInArr[i] === array[j][str]) {
                result.push(array[j])
            }
        }
    }
    return result
}

sortObjects(
    [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 80 },
    ],
    "score"
    )
