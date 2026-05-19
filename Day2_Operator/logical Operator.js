//logical operator - used to combine multiple condition
// && - AND - both condition must be true
// || - OR  - any one condition is true
// !  - NOT  - true becomes false and false becomes true

let runs = 75
let strikeRate = 150
console.log(runs>50 && strikeRate>140)

let marks = 80
let passingMark = 40
console.log(marks>100 && passingMark<45)

// OR (||) - atleast one condition is true
let  teamScore = 210
let wicketTaken = 5
console.log(teamScore>200 || wicketTaken>=10)

let fruitsprice = 500
let apple = 100
console.log(fruitsprice<=54 || apple>=340)

//NOT (!) - reverse the result
let calculatedMarks = NaN //0, -0, "", null, undefined, NaN
console.log(!calculatedMarks)

let allOut = false
console.log(!allOut)

let cashOut = "shivam" 
console.log(!cashOut)


 