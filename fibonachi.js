function generateFibonacci(num) {
    let fib1 = 0
    let fib2 = 1
    let currentFib = fib1 + fib2
    let res = []
    while(fib1 < num) {
        res.push(fib1)
        currentFib = fib1 + fib2
        fib1 = fib2 
        fib2 = currentFib 
    } 
      return res
}
generateFibonacci(50)