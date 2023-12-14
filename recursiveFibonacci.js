 function recursivFibannacci(n){

    if(n<2){
        return n
    }

    return recursivFibannacci(n-1)+recursivFibannacci(n-2)

}


console.log(recursivFibannacci(0))
console.log(recursivFibannacci(1))
console.log(recursivFibannacci(6))
console.log(recursivFibannacci(8))
