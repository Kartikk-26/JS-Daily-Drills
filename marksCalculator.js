const prompt = require("prompt-sync")();

// Import readline module to get user input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate total marks and percentage
function calculateMarks() {
    // Get input for 5 subjects
    let subjects = [];
    let totalSubjects = 5;

    function getMarks(i) {
        if (i < totalSubjects) {
            rl.question(`Enter marks for Subject ${i + 1}: `, (marks) => {
                let mark = parseFloat(marks);
                if (isNaN(mark)) {
                    console.log("Please enter a valid number.");
                    return getMarks(i); // Ask for the same subject again if input is invalid
                }
                subjects.push(mark);
                getMarks(i + 1); // Move to next subject
            });
        } else {
            // Calculate total marks and percentage after getting all inputs
            let totalMarks = subjects.reduce((acc, mark) => acc + mark, 0);
            let percentage = (totalMarks / (totalSubjects * 100)) * 100;
            console.log("Total Marks: " + totalMarks);
            console.log("Percentage: " + percentage.toFixed(2) + "%");

            // Provide feedback based on percentage
            if (percentage >= 90) {
                console.log("Grade: A+");
            } else if (percentage >= 75) {
                console.log("Grade: A");
            } else if (percentage >= 60) {
                console.log("Grade: B");
            } else if (percentage >= 50) {
                console.log("Grade: C");
            } else {
                console.log("Grade: F");
            }

            rl.close(); // Close input interface after finishing
        }
    }

    // Start getting marks for subject 1
    getMarks(0);
}

// Call the function to calculate marks
calculateMarks();
