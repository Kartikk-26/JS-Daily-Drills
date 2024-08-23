const prompt = require("prompt-sync")()

const userNum = prompt("Enter the Temperature in Degree : ")

const Final = userNum*(9/5) + 32;

console.log(Final)