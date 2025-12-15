// ==============================
// JAVASCRIPT OPERATORS
// ==============================

// 1. ARITHMETIC OPERATORS
let a = 10;
let b = 3;

console.log(a + b);  // addition
console.log(a - b);  // subtraction
console.log(a * b);  // multiplication
console.log(a / b);  // division
console.log(a % b);  // remainder (VERY IMPORTANT)

// 2. ASSIGNMENT OPERATORS
let x = 5;

x += 3; // x = x + 3
console.log(x);

x -= 2; // x = x - 2
console.log(x);

x *= 2; // x = x * 2
console.log(x);

// 3. COMPARISON OPERATORS
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);   // loose equality
console.log(num1 === num2);  // strict equality (IMPORTANT)

console.log(num1 != num2);
console.log(num1 !== num2);

console.log(num1 > 5);
console.log(num1 < 5);

// 4. LOGICAL OPERATORS
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission); // AND
console.log(isLoggedIn || hasPermission); // OR
console.log(!isLoggedIn);                 // NOT

// 10 == "10"   // true  ❌ dangerous
// 10 === "10"  // false ✅ safe
// Use === always.
// Use == only if you 100% know why.
