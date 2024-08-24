const prompt = require("prompt-sync")();

const input = prompt("Enter the number of terms you want in the Fibonacci sequence: ");

let a = 0;
let b = 1;
let count = 2;

while(count<=input){
    let temp = b;
    b=b+a;
    a = temp;
    count++;
}

console.log("Number of terms is : ",b);