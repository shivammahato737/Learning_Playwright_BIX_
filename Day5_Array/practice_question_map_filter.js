const arr = [2, 5, 3, 4, 7]
const mapResult = arr.map((ar) => {
    return ar + 2
})

const forEachResult = arr.forEach((ar, i)=>{
    //return ar + 2
    arr[i] = ar + 2
})
console.log(mapResult  );
console.log(forEachResult);


//map, filter and reduce - O/P question
//1. Return only name of students in capital
let students = [
    {name:"shivam", age: 20, marks:76},
    {name:"satyam", age: 29, marks:66},
    {name:"sundaram", age: 27, marks:86},
    {name:"amit", age: 25, marks:96},
    {name:"bikash", age: 24, marks:77}
]
//for loop
/*
let names = []
for(let i = 0; i<students.length; i++){
    names.push(students[i] .name.toUpperCase())
}
console.log(names); 
*/
//Or
const names = students.map((stu) => stu.name.toUpperCase())
console.log(names);








//five fruits having the price and weight and print the fruits into uppercase
let fruits = [
    {name: "apple", Price: 70, weight:20},
    {name: "banana", Price: 60, weight:10},
    {name: "guava", Price: 40, weight:40},
    {name: "Mango", Price: 90, weight:15},
    {name: "strawberry", Price: 80, weight:25}
]
/*
let names = []
for (let i=0; i<fruits.length; i++){
    names.push(fruits[i].name.toUpperCase())
}
console.log(names);
*/
const names = fruits.map((fru) => fru.name.toUpperCase())
console.log(names);


//q.2 - return only details of those who score more than 60 marks
let students = [
    {name:"shivam", rollNumber: 31, marks:76},
    {name:"satyam", rollNumber: 15, marks:66},
    {name:"sundaram", rollNumber: 17, marks:60},
    {name:"amit", rollNumber: 25, marks:96},
    {name:"bikash", rollNumber: 10, marks:77}
]

/*const names = stud */

//q.3 more than 60 marks and roll number greater than 15
const name = students.filter((stu)=> stu.marks>60 && stu.rollNumber>15)
console.log(name); 

const names = students.filter((stu)=>stu.name.startsWith('s'))
console.log(names);

//sum of marks of all of the students
let students = [
    {name:"shivam", rollNumber: 31, marks:76},
    {name:"satyam", rollNumber: 15, marks:66},
    {name:"sundaram", rollNumber: 17, marks:60},
    {name:"amit", rollNumber: 25, marks:96},
    {name:"bikash", rollNumber: 10, marks:77}
]
const total = students.reduce((acc, curr)=> acc + curr.marks, 0)
console.log(total);

//q.6 return only names of students who scored more than 60
let students = [
    {name:"shivam", rollNumber: 31, marks:76},
    {name:"satyam", rollNumber: 15, marks:66},
    {name:"sundaram", rollNumber: 17, marks:60},
    {name:"amit", rollNumber: 25, marks:96},
    {name:"bikash", rollNumber: 10, marks:77}
]

const names = students.filter((stu)=> stu.marks>60).map((stu)=> stu.name)
console.log(names);

let students = [
    {name:"shivam", rollNumber: 31, marks:76},
    {name:"satyam", rollNumber: 15, marks:66},
    {name:"sundaram", rollNumber: 17, marks:60},
    {name:"amit", rollNumber: 25, marks:96},
    {name:"bikash", rollNumber: 10, marks:77}
]

//list of name whose roll number is less than 20
const names = students.filter((stu)=>stu.rollNumber<20).map((stu)=>stu.name)
console.log(names);


//Q.6 - Returns total marks for students with marks greater than 
// 60 after 20 marks have been added to those who scored 
// less than 60






