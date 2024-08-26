function findLongestWord(str) {
    let res = ""
    let strInArr = str.split(" ")
    for(let value of strInArr ) {
        if(value.length >= res.length) res = value
    }
    return res
}

findLongestWord("The quick brown fox jumps  JawaScriptt over the lazy dog") 