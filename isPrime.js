function isPrime(num) {
    let res = true
    for(let i = 2 ; i < num ; i++) {
        if(num % i === 0) return false
    }
    return res
}

isPrime(29)