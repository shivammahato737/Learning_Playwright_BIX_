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
let cart = ["laptop" , "mobile"]
console.log (cart.includes("laptop"))
console.log (cart.includes("Laptop"))

//index of
let cart = ["laptop" , "mobile"]
console.log(cart.indexOf("laptop")) //if value is not present then it returns -1 value
console.log(cart.indexOf("mobile")) //if value is not present then it returns -1 value
console.log(cart.indexOf("Laptop")) //if value is not present then it returns -1 value

//slice - copy the portion of an array and put it into new array ie (start, end)
const products = ["laptop", "mobile", "headphone", "smart watch", "tablet"] //
console.log(products.slice(1))//"mobile", "headphone", "smart watch", "tablet"
console.log(products.slice(-1)) //tablet
console.log(products.slice(1,3))// mobile", "headphone
console.log(products.slice(7)) // []
console.log(products.slice(-1, -4)) // []
console.log(products.slice(1, 2)) // []

//splice - it remove more than one item the products from the cart ie array.splice(startIndex, deleteCount, item1, item2, ...)
const products = ["laptop", "mobile", "headphone", "smart watch", "tablet"]
//console.log(products);
//console.log(products.splice(3))
console.log(products);
console.log(products.splice(1,5, 7))
console.log(products);

let cart = ['apple', 'banana', 'orange', 'mango'];// Start at index 1 ('banana'), and delete 2 items.
let removedItems = cart.splice(1, 2); 
console.log(removedItems); // Output: [ 'banana', 'orange' ] (What was removed)
console.log(cart);         // Output: [ 'apple', 'mango' ] (The array is permanently changed!)

let cart = ['apple', 'banana', 'orange'];// Start at index 1, delete 0 items, insert 'kiwi'
cart.splice(1, 0, 'kiwi'); 
console.log(cart); // Output: [ 'apple', 'kiwi', 'banana', 'orange' ]

let cart = ['apple', 'banana', 'orange'];// Start at index 1, delete 1 item ('banana'), insert 'strawberry'
cart.splice(1, 1, 'strawberry');
console.log(cart); // Output: [ 'apple', 'strawberry', 'orange' ]

let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi'];// 
cart.splice(1, 4, 1, 5);// at index 1 add 4 elements
console.log(cart); 

let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi'];// 
cart.splice(1, 3, 1, 3);// at index 1 add 3 elements
console.log(cart); 


//concat() - it combine array and returns a new array 
const cart = ['laptop', 'mobile' , 'tablet']
const wishList = ['smart watch'] 
console.log(cart.concat(wishList))

//join () - convert array into a string
let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi']
console.log(cart.join('  '))

//reverse() - reverse the array
let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi']
console.log(cart.reverse())

//sort() - alphabetical sorting
let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi']
console.log(cart.sort());

//forEach() - to display element one by one, work same as for loop
let cart = ['apple', 'banana', 'orange', 'guava', 'kiwi'];
cart.forEach(products => {
  console.log(products); // Now it prints the current fruit!
}); 
console.log("Finished looping!");

/*
task 1:-
const cart = ['laptop', 'iphone']
Add Headphone 
remove iphone
expected is ['laptop', 'headphone'] */

const cart = ['laptop', 'iphone']
cart.pop()
cart.push('headphone')
console.log(cart);


/*task 2:- 
const prices =[1000, 2000
update the prices of a product]
*/
const prices = [1000, 2000]
prices[0] = 5000
console.log(prices);






//task-1
cart =['apple','banana']
console.log(cart.pop()) //
console.log(cart)
cart.push('orange')
console.log(cart)

cart =['apple','banana']
cart.pop()
console.log(cart)
cart.push('orange')
console.log(cart)




//task2 
price=['1000','2000']
price[1]='3000'
console.log(price)

