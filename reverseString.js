const prompt = require("prompt-sync")();

const userInput = prompt("Enter the String : ");

if (userInput) {
    let reversedString = reverseString(userInput);
    console.log("Reversed String: " + reversedString);
} else {
    console.log("You didn't enter anything!");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
