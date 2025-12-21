// ==============================
// ARRAY MAP METHOD
// ==============================

// 1. Basic map example
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function (num) {
    return num * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// ------------------------------

// 2. Map using arrow function
let squared = numbers.map(num => num * num);
console.log("Squared:", squared);

// ------------------------------

// 3. Map with strings
let names = ["ambady", "dileep", "js"];

let capitalNames = names.map(name => name.toUpperCase());
console.log("Capital names:", capitalNames);

// ------------------------------

// 4. Map with objects
let users = [
    { name: "Ambady", age: 19 },
    { name: "Rahul", age: 22 },
    { name: "Anu", age: 18 }
];

let userNames = users.map(user => user.name);
console.log("User names:", userNames);

// ------------------------------

// 🚨 Reality:
// map ALWAYS returns a new array
// NEVER use map if you don't return
