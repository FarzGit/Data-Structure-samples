function insertionSort (arr) {
  

    for (let i = 1; i < arr.length - 1; i++) {
      let nti = arr[i]

      let j = i - 1
      while (j >= 0 && arr[j] > nti) {
        arr[j + 1] = arr[j]

        j = j - 1
        
      }
      arr[j + 1] = nti
    }
 
}

const arr = [1,4,5,3,2,6,-6,8,9]
insertionSort(arr)
console.log('sorted array is :',arr)







