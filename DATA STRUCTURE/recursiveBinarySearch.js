// function recursiveBinarySearch (arr, target) {
//   arr.sort()

//   return search(arr, target, 0, arr.length - 1)
// }

// function search (arr, target, fi, li) {
//   if (fi > li) {
//     return -1
//   }

//   let mi = Math.floor((fi + li) / 2)
//   if (target === arr[mi]) {
//     return mi
//   }

//   if (target < arr[mi]) {
//     return search(arr, target, fi, mi - 1)
//   } else {
//     return search(arr, target, mi + 1, li)
//   }
// }



// console.log(recursiveBinarySearch([-1, 2, 44, 3, 5, 7], 7))
// console.log(recursiveBinarySearch([-1, 2, 3, 5, 7], 50))
// console.log(recursiveBinarySearch([-1, 2, 3, 5, 7], -1))




function recBin(arr,target){
  arr.sort((a,b)=>a-b)
  return search(arr,target,0,arr.length-1)
}

function search(arr,target,li,ri){
  if(li>ri){
      return null
  }
  
  let mid = Math.floor((li+ri)/2)
  
  if(target===arr[mid]){
      return mid
  }
  
  if(target<arr[mid]){
      return search(arr,target,li,mid-1)
  }else{
      return search(arr,target,mid+1,ri)
  }
}

console.log(recBin([21,34,54,33,5,9],9))
