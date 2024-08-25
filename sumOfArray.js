function sumArray(arr) {
    return arr.reduce((curr,item) => item + curr,0)
}
sumArray([-1, 2, -3, -4, -5]); // Output: 15