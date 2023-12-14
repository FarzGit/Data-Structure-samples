
function linearSearch(n,t){

    for(let i=0;i<n.length;i++){
        if(n[i]===t){
            return i
        }
    }

    return -1

}


console.log(linearSearch([1,2,3],3))