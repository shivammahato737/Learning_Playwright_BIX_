// Create a string variable and print it
// Find the length of the string
// Print the first character
// Print the last  character
// Remove the spaces from beginning and end
// Check whether a string contains 'Playwright'
// Check whether a hashtag starts with #
// Find the position of occurence of 'a'
// Find the position of last occurence of 'a'
// Replace 'Selenium' with 'Playwright'
// Extract username from your email

// 1. Create a string variable and print it
let input = "Welcome to India!";
console.log( input);

// 2. Find the length of the string
let lengthStr = input.length;
console.log( lengthStr);

// 3. Print the first character
let firstChar = input[0]; 
console.log( firstChar);

// 4. Print the last character
let lastChar = input[input.length - 1];
console.log( lastChar);

// 5. Remove the spaces from beginning and end
let input = "  Welcome to India!";
let trimmedMessage = input.trim();
console.log(trimmedMessage);

// 6. Check whether a string contains 'Playwright'
let input = "  Welcome to India and learn Playwright!";
let text = input.includes("Playwright");
console.log( text);

// 7. Check whether a hashtag starts with #
let hashtag = "#javascript";
let startsWithHash = hashtag.startsWith("#");
console.log( startsWithHash);

// 8. Find the position of occurrence of 'a'
let message = "shivam"
let firstMessage = message.indexOf("a");
console.log( firstMessage)

// 9. Find the position of last occurrence of 'a'
let message = "shivama"
let firstMessage = message.lastIndexOf("a");
console.log( firstMessage)

// 10. Replace 'Selenium' with 'Playwright'
let message = 'Selenium'
let updatedMessage = message.replace("Selenium", "Playwright");
console.log( updatedMessage);

// 11. Extract username from your email
let email = "shivammahato321@gmail.com";
let username = email.split("@")[0]; 
console.log( username);

let domain = email.split('@')[1]
console.log(domain);

console.log(domain === 'gmail.com');

// includes()
// split()
// replace()
// replaceAll()
// trim()
// slice()
// toLowerCase()
// toUpperCase()
// startsWith()
// endsWith()
// length
// indexOf

