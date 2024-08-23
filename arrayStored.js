const prompt = require("prompt-sync")()

let input = prompt("Enter a list of numbers separated by commas : ");
let numberArray = input.split(",").map(Number);

function getPositiveNumbers(number){
    let positiveNumbers = [];
    for(let i=0; i<number.length; i++){
        if(number[i]>0){
            positiveNumbers.push(number[i]);
        }
    }
    return positiveNumbers;
}

let result = getPositiveNumbers(numberArray);
console.log("Positive Numbers are : ",result);

