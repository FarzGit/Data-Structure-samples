// Function to perform heapify operation on a subtree rooted at index i
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Compare with left child
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Compare with right child
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap and continue heapifying if needed
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Main function to perform heap sort
function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arrayToSort);

heapSort(arrayToSort);
console.log("Sorted Array:", arrayToSort);
