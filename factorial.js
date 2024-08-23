const prompt = require("prompt-sync")();

const userNum = parseInt(prompt("Enter a number: "));

let factorial = 1; // Use 'let' instead of 'const'

for (let i = 1; i <= userNum; i++) {
    factorial *= i; // Modify 'factorial' inside the loop
}
console.log(factorial)
console.log(`Factorial of ${userNum} is: ${factorial}`);
