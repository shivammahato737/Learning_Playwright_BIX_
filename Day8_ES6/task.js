//Task 1 : - first select restaurant is A2B and changed to Hyderabad biryani (value should changed)
let restaurant = 'A2B'
console.log("first restaurant is:", restaurant);
restaurant = "Hyderabad biryani"
console.log("changed restaurant is:", restaurant);

//task 2 : first select swiggy , changed to zomato - value can't change - observe the error
const foodDeliveryApp= "swiggy"
console.log("first selected APP :" , foodDeliveryApp);
foodDeliveryApp = "zomato"
console.log(foodDeliveryApp);

//task 3 : create an arrow function and output should be "order successfully placed"
const makeOrder = () => {
    console.log("order successfully placed");
}
makeOrder()

//or
const placedOrder = () => "order successfully placed"
console.log(placedOrder());


//task 4 : - create an Arrow function with parameter - order Item ; biryani
const makeOrder = (orderItem) => {
    console.log("Biryani");
}
makeOrder()

//task 5: - template literals "Shivam ordered biryani from Faruzzi" - dont use + operator only use the template liteals
let name = "shivam"
let foodName = "biryani"
let restaurantName = "Faruzzi"
console.log(`${name} ordered ${foodName} from ${restaurantName}`);

//task 6 : - template literals - "Total bill amount is 900" , use the symbol `${}
let amount = 900
console.log(`total bill amount is ${amount}`);

//task 7 : - object destructuring - extract value using destructuring
const customer  ={
    name : 'shivam',
    city : 'hyderabad',
    mobile : 7381310638
}
const {name, city, mobile} = customer
console.log(name);
console.log(city);
console.log(mobile);


//task 8 :- Array Destructuring - ['pizza', 'Burger', 'Dosa']
const menu = ['pizza', 'Burger', 'Dosa']
const [firstItem, secondItem, thirdItem] = menu
console.log(firstItem, secondItem, thirdItem);

//task 9 : - Array Destructuring - ['pizza', 'Burger', 'Dosa'] - extarct first item only
const menu = ['pizza', 'Burger', 'Dosa']
const [firstItem, secondItem, thirdItem] = menu
console.log(firstItem);

//task 10 ;- spread operator - Duplicate cart - create new array using spread opeartor and print both arrays
let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]
console.log(arr1);
console.log(arr2);

//Or
let newcart = ['Apple', 'Mango', 'Guava', 'banana']
let duplicateCart = [...newcart]
console.log(newcart);
console.log(duplicateCart);

//task 11: merge two carts using spread operator  - Array 
let cart1 = ['apple', 'banana', 'Mango']
let cart2 = ['potato', 'onion', 'carrot']
let mergecart = [...cart1, ...cart2]
console.log(mergecart);

//task 12: merge two carts using spread operator  - create updated objects 
const employee ={
    name : "shivam",
    id : 78373,
    city : "Delhi"
}
const employeeDetails = {
    company : "Deloitte",
    salary : 150,
    id : 334554
}
const updatedDetails = {...employee, ...employeeDetails}
console.log(updatedDetails);

//task 13 : - default parameter - create function with default parameter
const calculateTax = (amount, taxRate = 0.05) => {
    return amount + (amount * taxRate)
}
console.log(calculateTax(100));

//task 14 :- Modules : import and print GST value - gstGST() in util.js and import gstGST in main.js

// Task 15 : Array Destructuring - ['Pizza', 'Burger', 'Dosa'] - Skip second item and move to next one

const foodItems = ['Pizza', 'Burger', 'Dosa']
const [first, , third] = foodItems
console.log(first, third);

