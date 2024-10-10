function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
const string1 = "radar";
const string2 = "hello";

console.log(`"${string1}" is a palindrome:`, isPalindrome(string1)); // true
console.log(`"${string2}" is a palindrome:`, isPalindrome(string2)); // false
