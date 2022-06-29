function fibo(n) {
    if (n === 2) {
        return [0, 1]
    }
    else {
        let arr = fibo(n - 1)
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        return arr
    }
}

console.log(fibo(5))
