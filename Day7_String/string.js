//string - used to store text
let username = 'Shivam Kumar'
let message = 'Good Morning, shivam'
let productName = "samsung galaxy ultra 17 "
let email = "abcd@gmail.com"
let movieName = "Off-Campus"

let firstName = 'shivam' // single quotes
let firstName = "shivam" // double quotes
let firstName = `shivam` // Backticks

let firstName = 'shivam'
//character: S h i v a m - it stores like this in memory
//index :    0 1 2 3 4 5
console.log(firstName[0]);

//string length
let firstName = 'shivam'
console.log(firstName.length);

//can we modify a string - No because string are immutable
let username = 'shivam' //
username[1] = 'u'
console.log(username);

//string concatenation - (+) - joins the string
//welcome shivam
let firstName = 'shivam'
console.log('welcome ' + firstName);
 
//Template literals
let username = "shivam"
let lastName = "Mahato"
let followers = 1000
console.log(username + " has " + followers + ' followers');
 //oR
 console.log(`${username} has ${followers} followers`);



 
 


