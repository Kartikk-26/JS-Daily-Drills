const prompt = require("prompt-sync")();

console.log("Choose Your Job Type Given Below -> \n1 : Government Job\n2 : Business\n3 : Private Job");

const operation = parseFloat(prompt('Enter Your Choice : '));

function parseSalaryInput(input) {
    input = input.trim().toUpperCase();
    
    if (input.endsWith("K")) {
        return parseFloat(input.slice(0, -1)) * 1000;
    } 
    else if (input.endsWith("L")) {
        return parseFloat(input.slice(0, -1)) * 100000;
    }
    return parseFloat(input);
}

if (operation == 1) {
    const salaryInput = prompt('Enter Your Salary : ');
    const salary = parseSalaryInput(salaryInput);
    
    if (salary >= 50000) {
        console.log("You are eligible for a loan");
    } else {
        console.log("You are not eligible for a loan");
    }
} 
else if (operation == 2) {
    const turnoverInput = prompt('Enter Your yearly turnover : ');
    const turnover = parseSalaryInput(turnoverInput);

    if (turnover >= 2000000) {
        console.log("You are eligible for a loan");
    } else {
        console.log("You are not eligible for a loan");
    }
} 
else if (operation == 3) {
    console.log("You are not eligible for a loan");
} 
else {
    console.log("Invalid Choice");
}
