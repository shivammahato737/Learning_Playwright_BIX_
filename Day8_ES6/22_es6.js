/* 
let
const
Arrow function
Template literals
Destructuring
Spread operator
Rest parameter
promises
Async Await
POM (Page object model)
DOM
oops concept

*/

 let restaurant = 'A2B'
//let allows 

const user = {
    name : 'Shivam'
}
user.name ='Mahato'

console.log(user);

user ={}

//Normal function
function orderFood(){
    console.log("food ordered");
    
}
orderFood()

//with parameter default value
function orderFood(restaurant = 'A2B'){
    console.log(restaurant);
    
}
orderFood()

//Arrow function - 
const orderFood =() => {
    console.log("food delivered");
    
}
orderFood()

const placeOrder = () => {
    console.log('order confirmed');
    
}
placeOrder()

//ES6
//Before ES6
let item = 'pizza'
console.log("ordered item:" + item);

//template literals
let item = "pizza"
console.log(`ordered item : ${item}`);

let item = "pizza"
const price = 250
let quantity = 3
console.log(`ordered item is ${item} and the toal is ${price * quantity}`);

let restaurant =  'BBQ'
let item = 'Dosa'
console.log(`order placed at ${restaurant} for ${item}`);



//spread operator [...]
const cart = ['pizza', 'Burger', 'pasta']
const newcart = [...cart]
console.log(newcart);

const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
const combinedNumber = [...num1, ...num2]
console.log(combinedNumber);

const employee = {
    name : "shivam",
    Id : 3673262,
    //city : "Hyderabad"
}
const updatedEmployee = {...employee, city : "Hyderabad"}
console.log(updatedEmployee);

const myNum = [10,20,34, 67, 96]
console.log(Math.max(...myNum))

const myNum = [10,20,40,60,70,90]
console.log(Math.min(...myNum));

const cart = ['dosa', 'idli', 'chole bhature']
const newCart = [...cart]
console.log(newCart);

    
//Rest Operator ... -> same symbol as spread
function order (...items){
    console.log(items);
    
}
order(
    'pizza',
    'Burger',
    'Dosa'
)

function calculateTotal (...prices){
    let total = 0
    for(let price of prices ){
        total += price
    }
    return total 
}
console.log(calculateTotal(10,20,30,59));



//Default parameter
function applyCoupon(coupon = 'NO_COUPON'){
    console.log(coupon);

}
applyCoupon()

//Modules
