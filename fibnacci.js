
function fibinacci(n){
    const fib = [0,1]

    for(let i=2; i<n; i++){

        fib[i]= fib[i-1]+fib[i-2]

    }

    return fib
}

console.log(fibinacci(2));
console.log(fibinacci(3));
console.log(fibinacci(4));
console.log(fibinacci(7));


