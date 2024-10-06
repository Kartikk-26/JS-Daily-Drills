function countDigits(number) {
    // Convert the number to a string and get its length
    return number.toString().length;
  }
  
  // Example usage
  const num = 123456;
  const digitCount = countDigits(num);
  console.log(`Number of digits in ${num} is: ${digitCount}`);
  