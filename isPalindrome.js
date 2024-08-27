function isPalidrome (str) {
    let res = ""
    let res1 = ""
    let strWithoutCasesInFirstAndEnd = str.trim().toLowerCase()

    for(let char of strWithoutCasesInFirstAndEnd) {
        if(char !== " " && char !== "," && char !== ":") res = res + char
    }
    for(let i = res.length - 1 ; i >= 0 ; i--) {
        res1 += res[i]
    }
    if(res1 === res) return true
    else return false

}
isPalidrome(" a  12 ,2,1,1221    :,a")