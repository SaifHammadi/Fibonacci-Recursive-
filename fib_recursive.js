// Any better/cleaner solution for this? the help is gonna be so helpful and god bless you.
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
