/* 
Function
Arrays
Object
String Methods
DOM basics
ES6 Features
Async JS
Modules
error handling


*/
function sundayRoutine(){
    console.log("wake up")
    console.log("Brush teeth")
    console.log("Drink coffee")
    console.log("walking")
    console.log("listening songs")
}
sundayRoutine()

/*function parameter -  

*/
function greet(name){
    console.log("good morning !" + name)
}
greet("shivam")
greet("")
greet("true")
greet(true)
greet(0)
greet(Shivam)

//parameter receives data and 
// Arguement sends data

function add(a, b){
    console.log(a+b);
}
add(10, 5)


function add(a, b){
    return a+b   // it send the value so that value can be used
    
}
let result = add(10, 5)
console.log(result);
console.log(result ** 2) // exponential 

function add(a, b, c){
    return a + b + c   
}

let result = add(10, 5, 3) 

console.log(result);       
console.log(result ** 2)  


function square(a){
    return a ** 2
}
let result = square(10) 
console.log(result);

// 4. Function Expression - doesn't supports hoisting
sundayMood()
const sundayMood = function (){
    console.log("Relaxing")
}


// function declaration - supports hoistin



