function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];   // current element
        let j = i - 1;

        // move elements greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

       
        arr[j + 1] = key;
    }

    return arr;
}


let arr = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(arr));