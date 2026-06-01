/* Arrow function -> It return the value and it doesn't support
hoisting


*/
function greet(name){
    console.log("good morning !" + name)
}

const greet = (username) => {
    console.log("Good morning" , username);
    
}
greet("shivam")


const add = (a,b,c) => a+b+c
console.log(add(10,5,5));

let add = (a,b,c) => a+b+c
console.log(add(10,5,5));


// Regular Function Declaration
function double(number) {
    return number * 2;
}
double (5)

// Arrow Function (Long form)
const double = (number) => {
    return number * 2;
};

// Arrow Function (Shortest form - Implicit Return)
const double = number => number * 2;


const addNumbersArrow = (a, b) => {
    let sum = a + b;
    return sum;
};

const mul =(x,y) =>(x*y)
console.log(mul(10,90))

const addNumbersArrow = (a, b) => {
    let sum = a + b;
    return sum;
};
console.log(addNumbersArrow(5, 10));



//with parenthesis
const mul = (x, y) => {
    return x * y;
};
console.log(mul(10, 90)); 



//withour parenthesis
const triplet = d => d*d*d
console.log(triplet(7))
//Output 343



function WeekendMood(time){
    if(time < 7){
        return "Gym Mood"
    }else if (time < 10) 
        {
            return "Breakfast Mood"
        }
        else {
            return "Sleep Again Mood"
        }
    }
console.log(WeekendMood(100))
console.log(WeekendMood(-1))
console.log(WeekendMood(200))

//output - 
// Sleep Again Mood
// Gym Mood
// Sleep Again Mood

