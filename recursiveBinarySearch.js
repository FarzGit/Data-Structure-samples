function recursiveBinarySearch (arr, target) {
  arr.sort()

  return search(arr, target, 0, arr.length - 1)
}

function search (arr, target, fi, li) {
  if (fi > li) {
    return -1
  }

  let mi = Math.floor((fi + li) / 2)
  if (target === arr[mi]) {
    return mi
  }

  if (target < arr[mi]) {
    return search(arr, target, fi, mi - 1)
  } else {
    return search(arr, target, mi + 1, li)
  }
}

// big O = o(logn)  because of half the array in each itration

console.log(recursiveBinarySearch([-1, 2, 44, 3, 5, 7], 7))
console.log(recursiveBinarySearch([-1, 2, 3, 5, 7], 50))
console.log(recursiveBinarySearch([-1, 2, 3, 5, 7], -1))
