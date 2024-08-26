function mostFrequentItem(array) {
    let res 
    let obj = {}
    let maximum = 0
    for(let i = 0 ; i < array.length ; i++) {
        if(array.includes(array[i]) && array.indexOf(array[i]) !== i) obj[array[i]]++
        else obj[array[i]] = 1  
    }
    
    let entries = Object.entries(obj)
    for(let i = 0 ; i < entries.length ; i++) {
        if(maximum < entries[i][1]) {
            maximum = entries[i][1]
            res = entries[i]
        } 
    } return res[0]
    
}

mostFrequentItem(["apple","banana","apple","orange","banana","banana",])