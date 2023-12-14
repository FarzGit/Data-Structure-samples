

function recursivFactorial(n){

    if(n===0){
        return 1;
    }

    return n * recursivFactorial(n-1)

    
}


console.log(recursivFactorial(4))
console.log(recursivFactorial(5))
console.log(recursivFactorial(8))
console.log(recursivFactorial(9))
console.log(recursivFactorial(30))
