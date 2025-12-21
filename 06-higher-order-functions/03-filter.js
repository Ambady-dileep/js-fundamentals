// ==============================
// ARRAY FILTER METHOD
// ==============================

// 1. Filter numbers greater than 10
let numbers = [5, 12, 8, 20, 3, 15];

let greaterThanTen = numbers.filter(num => num > 10);
console.log("Greater than 10:", greaterThanTen);

// ------------------------------

// 2. Filter even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// ------------------------------

// 3. Filter strings by length
let words = ["js", "react", "node", "html", "css"];

let longWords = words.filter(word => word.length > 3);
console.log("Long words:", longWords);

// ------------------------------

// 4. Filter objects
let users = [
    { name: "Ambady", age: 19 },
    { name: "Rahul", age: 25 },
    { name: "Anu", age: 17 }
];

let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// ------------------------------

// 🚨 Reality:
// filter MUST return true or false
// If you return something else → bug
