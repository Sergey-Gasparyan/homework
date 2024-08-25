function findVowel(str) {
    let vowels = ['a','e','o','i','u']
    let res = 0
    for(let ind = 0; ind < str.length ;ind++) {
        if(vowels.includes(str[ind].toLowerCase())) res++
    }
    return res
}
findVowel("Helloaa Word")