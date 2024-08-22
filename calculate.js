const prompt = require("prompt-sync")()

// Simple Calculator Program

// Function to perform calculations
function calculate(operation, num1, num2) {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid Operation';
    }
}

// Example usage
const operation = prompt('Enter operation (+, -, *, /): ');
const num1 = parseFloat(prompt('Enter First Number: '));
const num2 = parseFloat(prompt('Enter Second Number: '));

const result = calculate(operation, num1, num2);
console.log(`The result of ${num1} ${operation} ${num2} = ${result}`);
