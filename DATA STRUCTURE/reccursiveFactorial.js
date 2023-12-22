

function recursivFactorial(n){

    if(n===0){
        return 1;
    }

    return n * recursivFactorial(n-1)

    
}


console.log(recursivFactorial(4))





