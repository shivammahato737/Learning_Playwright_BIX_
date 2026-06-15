/*Task -1
create an object as customer 
properties are name, age, city.
print the whole object 

task -2 
print only the customer name

task -3: print age using the bracket notation 

task : 4 - add the new property - email

task 5 : - update city 

task 6 : - delete age properties and print the whole object

task 7 :- create a nested employee object , print the employee id, employee city name (city should be inside address object)


*/
//task 1- print whole object
let customer = {
  name: "Shivam",
  age: 26,
  city: "Hyderabad"
};
console.log(customer);

//task 2- print only customer name
console.log("customer Name:", customer.name);

//task 3 - print age using bracket notation
console.log("Customer Age:", customer["age"]);

//task 4 - add the new property - email and print all
customer.email = "shivam@example.com";
console.log( customer);

//task 5 - update city
customer.city = "Delhi";
console.log("Updated city:", customer.city);

//task 6 - delete age properties and print the whole object
delete customer.age;
console.log("Object after deleting age:", customer);

//task- 7-Task 7: Create a nested employee Object, 

//print the employee id, employee city name (city should be inside address object)
let employee = {
  "employee Id": 1042,
  name: "Shivam",
  department: "Engineering",
  
  address: {   
    street: "123 Tech Park",
    city: "Bangalore",
    pinCode: "560001"
  }
};
//dot notation
console.log("Employee ID:", employee.employeeId);
console.log("Employee City:", employee.address.city);

//bracket notation
console.log("Employee ID:", employee["employeeId"]);
console.log("Employee City:", employee["address"]["city"]);


//task - 7
const employee ={
"employee Id": 10656333,
Address :{

        city : "Chennai"

    }

}
console.log(employee["employee Id"])
console.log(employee.Address.city) 


/* 
const customer = {

    name: "Aishwarya",
    age: 27,
    city: "Bangalore"
}
console.log(customer)
console.log(customer.name)
console.log(customer["age"])
customer.email = "aishwarya@gmail.com"
console.log(customer)
customer.city = "bangalore"
console.log(customer)
delete customer.age
console.log(customer)
const employee = {

    id: 101,
    name: "aishu",
    address: {
        city: "trichy",
        state: "Tamil Nadu"a

    }

}
console.log(employee.address.city)
console.log(employee.id)


const employee = {

"employee ID": 101,

name: "Aishwarya",

address: {

"employee city": "Bangalore"

}

}

console.log(employee["employee ID"])

console.log(employee.address["employee city"])

 

output :

101

Bangalore

*/

/* 

//Task1 Create customer Object and print whole object

const customer={

   name:"Bhupesh Giri",

   age:28,

   city:"Nagpur"

}

console.log(customer)

//Task2: Print only Customer's name

console.log(customer.name)

//Task3 : Print age using bracket notation

console.log(customer['age'])

//Task4 : Add a new property - email

customer.email="bhupeshgiri95@gmail.com"

console.log(customer)

//Task5 : Update city

customer.city="Mumbai"

console.log(customer)

//Task 6 : Delete age property and print object

delete customer['age']

console.log(customer)

//Task 7: Create a nested employee Object, print the employee id, employee city name (city should be inside address object)

const employee = {

    "employee ID": 124512,

    name: "Bhupesh Giri",

    address: {

       "door no":504,

        city: "Nagpur",

       "Pin Code":445304,

       state:"Maharastra"

       

    }

};

console.log(employee["employee ID"]);

console.log(employee.address.city);*/