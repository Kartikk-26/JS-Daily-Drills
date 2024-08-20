// Import the crypto module
const crypto = require('crypto');

// Function to generate a 6-digit OTP
function generateOTP() {
    const otp = crypto.randomInt(1000, 9999); // Generates a random number between 100000 and 999999
    return otp.toString(); // Convert the number to a string and return it
}

// Generate and print the OTP
const otp = generateOTP();
console.log('Your OTP is:', otp);
