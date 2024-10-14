function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  const num = 7;
  console.log(`The number ${num} is ${checkEvenOrOdd(num)}.`); // Output: The number 7 is Odd.
  