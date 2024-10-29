function printOrderedPairs(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Initialize two pointers
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    // Step 3: Print min-max pairs
    while (minIndex < maxIndex) {
        console.log(`Max: ${arr[maxIndex]}, Min: ${arr[minIndex]}`);
        minIndex++;
        maxIndex--;
    }

    // Step 4: Handle the middle element if any
    if (minIndex === maxIndex) {
        console.log(`Only one element left: ${arr[minIndex]}`);
    }
}

// Example usage
const arr = [2, 4, 6, 5, 12, 4, 0, 9, 43, 52, 7, 99, 45];
printOrderedPairs(arr);
