var details = ["kartik",20,90.5,true];

let x = {
    name: details[0],   //key: value 
    age: details[1],
    percentage: details[2],
    isPassed: details[3],
}

let car = {
    brand: "AUDI",
    model: "A4",
    year: 2024,
    price: "1500000"
}

console.log(x);
console.log(car);

console.log(x.name); // To get the value of any key
console.log(x["isPassed"]);
console.log(car["price"]);

