const product = {
    name : 'laptop',

    seller : {
        name: "Reliance Digital ",
        city : "Chennai"
}
}
console.log(Object.keys(product));// returns an array
console.log(Object.values(product));// returns an array with values
console.log(Object.entries(product));// returns key value pairs

//for ...in - loop through the object properties
const product = {
    name :"laptop",
    price : 50000,
    stock : 10
}
for (let key in product){
    console.log(key);
}

for (let key in product){
    console.log(product["key"]);
    
}

//object destructuring - extract values into variables
const name  = product.name
const price  = product.price
const sellerCity = product.seller.city

//with destructuring and object chaining
const {name, price, sellerCity} = product
console.log(name);
console.log(price);
console.log(sellerCity);

//spread operator (...)
const newProduct ={
    ...product,
    ...stock : 20
}

//object cloning and merging

