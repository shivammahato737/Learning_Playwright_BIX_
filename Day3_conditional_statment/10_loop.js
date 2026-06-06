/*  Loops
//for loop - when the number of iteration is known

syntax
for (initiliazation; condition; increment/decrement){
}
*/

for (let i = 1; i<=5; i++){
    console.log("welcome to India");
    
}

for (let i = 1; i<=5; i++){
    console.log(i);
    
}

for (let i = 5; i>=1; i--){
    console.log(i);
    
}

/* while loop - runs while a condition is true

*/
let beds = 5
while (beds > 0){
    console.log("Avaialable Beds:", beds);
    beds--
    
}

//do..while loop - executes at least once
let token = 1
do{
    console.log("checking patient token:", token);
    token++
    

}
while(token<=3)