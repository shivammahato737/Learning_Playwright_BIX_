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

//Destruring

let customer = {
    name : "shivam",
    city : "Hyderabad",
    mobile : 62366322
}
const {name , city} = customer 
console.log(city);

//spread operator
const cart = ['pizza', 'Burger', 'pasta']
const newcart = [...cart]
console.log(newcart);
    
//Rest Operator ...
function order (...items){
}
order(
    'pizza',
    'Burger',
    'Dosa'
)

//Default parameter
function applyCoupon(coupon = 'NO_COUPON'){
    console.log(coupon);
    
     
}
applyCoupon()

//Modules 

//export
function login(){
    console.log('Login success')
}
export{login}
