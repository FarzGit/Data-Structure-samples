
function quickSort(arr){

    if(arr.length <2){
        return arr
    }


    let pivot = arr[arr.length-1]
    let left = []
    let right =[]

    for(i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = quickSort([1,4,6,0,7,-2,3,7])

console.log(arr)






