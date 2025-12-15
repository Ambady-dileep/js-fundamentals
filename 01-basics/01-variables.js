// ==============================
// VARIABLES IN JAVASCRIPT
// ==============================

// 1. var (older way - avoid in modern JS)
var age = 20;
age = 21;
console.log(age)

// 2. let (modern & preferred)
let name = "Dileep";
name = "Ambady";
console.log(name)

// 3. const (cannot be reassigned)
const country = "India";
// country = "USA"; ❌ Error
console.log(country)


// ==============================
// VARIABLE NAMING RULES
// ==============================

let firstName = "Ambady";   // camelCase (best practice)
let _count = 10;
let $price = 100;
console.log(_count) 
console.log($price)

// // ❌ Invalid
// let 1name = "test";
// let let = 10;


// ==============================
// BLOCK SCOPE (IMPORTANT)
// ==============================

if (true) {
    let blockVar = "inside block";
    console.log(blockVar);
}
// console.log(blockVar); ❌ Error


// ==============================
// REAL WORLD EXAMPLE
// ==============================

let balance = 0;
balance = balance + 500;
balance = balance - 200;
console.log(balance);