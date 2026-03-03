function heapify(arr, n, i) {
    let largest = i;        // root
    let left = 2 * i + 1;   // left child
    let right = 2 * i + 2;  // right child

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // swap
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

  
    for (let i = n - 1; i > 0; i--) {
        // swap root with last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        
        heapify(arr, i, 0);
    }

    return arr;
}


let arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted array:", heapSort(arr));