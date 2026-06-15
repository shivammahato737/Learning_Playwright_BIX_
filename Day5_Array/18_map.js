/* 
map() - transform every element and returns a new array
*/
const numbers = [1, 2, 3]
const doubled = numbers.map(number => number * 2)
const tripled = numbers.map(number => number * 3)
const squared = numbers.map(number => number * number)
console.log(doubled);
console.log(tripled);
console.log(squared);

 


const names = ["shivam", "kumar", "virat"];
const updatedNames = names.map(name => `Mr. ${name}`);
console.log(updatedNames);

const names = ["shivam", "amit", "bikash", 'akash', 'pooja']
const updatesNames = names.map(name => 'Mr.' + name)
console.log(updatesNames);



//filter() - keeps matching element
 

const numbers = [1, 2, 3]
const even = numbers.filter(num=> (num%2) == 0)
console.log(even);

//find() - returns first match only
const numbers = [10, 20, 30, 40]
const result = numbers .find(num => num > 20)
console.log(result);

const names = ['shivam', 'kumar', 'virat' , 'shilpi']
const name = names.find(n=> n.startsWith('s'))
console.log(name);

// reduce() - convert many values into one
const prices = [1005, 505, 2010]
const total = prices.reduce((sum, price)=>sum + price , 0)
console.log(total);

const numbers = [4, 6, 5, 2, 1]
const max = numbers.reduce ((largest , num) => {
    if(num > largest){
        return num
    }
    else {
        return largest
    }
})
console.log(max);

/* 

*/



