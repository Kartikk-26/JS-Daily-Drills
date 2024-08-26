const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number : "));
const num2 = parseFloat(prompt("Enter the second number : "));

const addtwonumber = (num1,num2) => num1+num2;

const result = addtwonumber(num1,num2);
console.log(`The sum of ${num1} + ${num2} = ${result}`);