//Modules 
/*
function login(){}
function logout(){}
function addProduct(){}
function removeProduct(){}
function payment(){}
function orderHistory(){}

login.js
payment.js
delivery.js
restaurant.js 
*/

//Export - making somethings available outside the current file
/*
function login(){
    console.log('Login Success');
    
}
export {login}
//only memory address shared, no duplicate function

//Named Export
*/
function login(){
    console.log('Login successful');
    
}
function logout(){
    console.log('Login');
    
}
export{login, logout} //if export more than one
//export {login} // if export only one

/*
1.Default export - use this when file has one main exports
// app.js
import calculateTotal from './mathUtils.js'; // Standard
import addNumbers from './mathUtils.js';     // Completely valid! Renamed on import.

2.Named export - use this when file containing multiple things
// app.js
import { capitalize, lowercase } from './stringUtils.js';

// INCORRECT (Will throw an error because the name doesn't match)
import { makeUppercase } from './stringUtils.js';
*/
