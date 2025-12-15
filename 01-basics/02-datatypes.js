// ===========================
// JAVASCRIPT DATA TYPES
// ===========================

// 1. STRING
let firstName = "Ambady";
let lastName = "Dileep";

console.log(firstName);
console.log(typeof firstName);


// 2. NUMBER
let age = 19;
let price = 99.99;

console.log(age)
console.log(typeof age); 
console.log(typeof price); 


// 3. BOOLEAN
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);


// 4. UNDEFINED
let score;

console.log(score);        // undefined
console.log(typeof score); // undefined

// 5. NULL (IMPORTANT & CONFUSING)
let selectedUser = null;

console.log(selectedUser);        // null
console.log(typeof selectedUser); // object (JS bug)

// 🚨 VERY IMPORTANT

// null vs undefined (Memorize this)
// undefined → variable declared, value NOT assigned
// null → value assigned intentionally as “empty”

// JS mistake:
console.log(typeof null === "object")
// This is a known JS bug, not your fault.