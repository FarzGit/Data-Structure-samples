 function recursivFibannacci(n){

    if(n<2){
        return n
    }

    return recursivFibannacci(n-1)+recursivFibannacci(n-2)

}


// console.log(recursivFibannacci(0))
// console.log(recursivFibannacci(1))
console.log(recursivFibannacci(5))
// console.log(recursivFibannacci(8))




// function recFibinachi(n){
//     if(n<=2){
//         return [0,1]
//     }else{
//         let fib = recFibinachi(n-1)
//         fib.push(fib[fib.length-1]+fib[fib.length-2]);
//         return fib
//     }
// }

// console.log(recFibinachi(5))





