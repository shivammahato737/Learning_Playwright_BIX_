//Destruring
const customer = {
    name : "shivam",
    city : "Hyderebad",
    mobile : 47775454
}
// const username = customer.name
// const city = customer.city
// const mobile = customer.mobile // repeated code ..

//so with the help of ES6
const {name, city, mobile} = customer // destructuring
console.log(mobile);


let customer = {
    name : "shivam",
    city : "Hyderabad",
    mobile : 62366322
}
const {name , city} = customer 
console.log(city);
console.log(customer);


let employee ={
    name : "shivam",
    Id : 7834734,
    city : "Hyderabad"
}

console.log(employee.city);

// or 
const employee = {}
    employee.name = "shivam"
    employee.id = 437834734
    employee.city = "Hyderabad"

console.log(employee.id);

const scores = [10,20,30,50,60]
const [first,second, third, ...remainingScores] = scores
console.log(first);
console.log(remainingScores);
console.log(third);




    



