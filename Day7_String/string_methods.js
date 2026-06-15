//string methods
//toUpperCase() -
//let user = "Shivam"
let user1 = "SHIVAM"
//console.log(user.toUpperCase());
console.log(user1.toUpperCase());

//trim - remove unwanted spaces
let user = ' shivam'
console.log(user);
console.log(user.trim());

//includes - It returns true or false if any of text match 
let comment = 'I want playWright course details. please contact me'
console.log(comment.includes("playwright"));

// startWith - 
let comment = 'I want playWright course details. please contact me'
console.log(comment.startsWith("i"));

//endswith
let comment = 'I want playWright course details. please contact me'
console.log(comment.endsWith('me'));

let file = "playWright Interview question.pdf"
console.log(file.endsWith(".pdf"));

//searching inside string
let app = 'instagrama'
console.log(app.indexOf('a'));// 
console.log(app.lastIndexOf('a'));

// slice() - extracts the text
let email = "shivammahato653@gmail.com"
//extarct username
let userName = email.slice(0, 7)
console.log(userName);

//substring()
let app = 'instagram'
console.log(app.substring(0, 5));

//replace 
let text = 'I write PlayWright'
console.log(text);
console.log(text.replaceAll('selenium', 'java'));

//splitiing the data
let skills = 'java, selenium, playwright'
console.log(skills.split(','));

 //extract product name from text
 let text = 'product : iphone 17'
 let product = text.split(':')[1]
 console.log(product);
 
 //verify Page title contains dashboard
 let title = "Admin Dashboard"
 console.log(title.includes('Dashboard'));
 











