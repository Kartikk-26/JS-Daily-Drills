const prompt = require("prompt-sync")();

const input = prompt("Enter the array (space-separated numbers): ");
const array = input.split(" ").map(Number);

function maxNumber(arr) {
    let max = arr[0];  // Start with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let result = maxNumber(array);
console.log("Max: ", result);
