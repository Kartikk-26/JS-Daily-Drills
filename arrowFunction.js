//Convert the `doubleNumber` function from question 2 into an arrow function.

const prompt = require("prompt-sync")();

const doubleNumber = (number)=> number*2;

const userInput = prompt("Enter the number : ");

const result = doubleNumber(Number(userInput));
console.log("The number doubled is :",result);