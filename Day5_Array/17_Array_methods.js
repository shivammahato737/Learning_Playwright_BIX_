/*
Array method
push() - Add at end
*/
let cart = ["laptop" , "mobile"]
console.log(cart);
cart.push("Headphone")
console.log(cart);

//pop() - It removes last item
console.log(cart.pop())
console.log(cart);

//unshift() - Add at the beginning
cart.unshift("joystick")
console.log(cart);

//shift() - remove first element
cart.shift()
console.log(cart);

//includes - elements is present or not and returns always boolean value
console.log (cart.includes("Laptop"))

//index of
console.log(cart.indexOf("laptop")) //if value is not present then it returns -1 value
console.log(cart.indexOf("Laptop")) //if value is not present then it returns -1 value

//slice
const products = ["laptop", "mobile", "headphone", "smart watch", "tablet"]
console.log(products.slice(1))
console.log(products.slice(-1))
console.log(products.slice(1,3))
console.log(products.slice(7))

//splice - it remove more than one item the products from the cart
const products = ["laptop", "mobile", "headphone", "smart watch", "tablet"]
//console.log(products);
//console.log(products.splice(3))

console.log(products);
console.log(products.splice(1,5))
console.log(products);


//concat() - it combine array and returns a new array 
const cart = ['laptop', 'mobile' , 'tablet']
const wishList = ['smart watch'] 
console.log(cart.concat(wishList))

//join () - convert array into a string
console.log(cart.join(','))

//reverse() - 
console.log(cart.reverse())

//sort() - alphabetical sorting
console.log(cart.sort());

//forEach() - to display element one by one, work same as for loop
cart.forEach(products => {console.log();
}) 

/*
task 1:-
const cart = ['laptop', 'iphone']
Add Headphone 
remove iphone
expected is ['laptop', 'headphone']

task 2:- 
const prices =[1000, 2000
update the prices of a product]
*/


//task 1:-
const cart = ['laptop', 'iphone'];
cart.pop();              
cart.push('headphone');  
console.log(cart);

//task 2:- 
const prices = [1000, 2000];
prices[1] = 2500; 
console.log(prices);

const cart = ['laptop', 'iphone'];
cart.pop();              
cart.push('headphone');  
console.log(cart);

const cart = ['laptop', 'iphone'];              
cart.push('headphone'); 
cart.pop() 
console.log(cart);


//task-1
cart =['apple','banana']
console.log(cart.pop())
console.log(cart)
cart.push('orange')
console.log(cart)

//task2 
price=['1000','2000']
price[1]='3000'
console.log(price)

