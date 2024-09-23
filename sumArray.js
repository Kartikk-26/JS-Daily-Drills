const prompt = require("prompt-sync")();

const sumArray = (arr) =>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

const userInput = prompt("Enter the numbers : ");
const numbers = userInput.split(",").map(Number);
const result = sumArray(numbers);
console.log("Sum of array is : ",result);