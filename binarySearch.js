

function binarySearch(arr,target){

    let li = 0;
    let ri=  arr.length -1

    while(li <= ri){
        let mi = Math.floor((li+ri)/2)

        if(target===arr[mi]){
            return mi
        }

        if(target < arr[mi]){
            ri = mi-1
        }else(
            li= mi+1
        )
    }

}
console.log(binarySearch([-1,2,3,5,7], 7))
console.log(binarySearch([-1,2,3,5,7],5))
console.log(binarySearch([-1,2,3,5,7,], -1))

