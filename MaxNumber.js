const prompt = require("prompt-sync")();

const findMaxNumber = (arr) => {
    if (arr.length === 0) {
        return "Array is empty";
    } else {
        let max = arr[0];  // Initialize max with the first element
        for (let i = 1; i < arr.length; i++) {  // Start loop from the second element
            if (arr[i] > max) {  // If current element is greater than max, update max
                max = arr[i];
            }
        }
        return max;
    }
}

const userInput = prompt("Enter numbers separated by commas : ");
const numberArray = userInput.split(",").map(Number);   //Input of numbers 

const maxNumber = findMaxNumber(numberArray);
console.log("The maximum number is : ",maxNumber);

