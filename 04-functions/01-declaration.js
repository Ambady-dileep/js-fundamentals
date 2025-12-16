// ==============================
// JAVASCRIPT FUNCTIONS - BASICS
// ==============================

// 1. Function Declaration
function greet() {
    console.log("Hello, welcome!");
}

greet();

// ------------------------------

// 2. Function with Parameters
function greetUser(name) {
    console.log("Hello", name);
}

greetUser("Ambady");
greetUser("Dileep");

// ------------------------------

// 3. Function with Return
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Sum:", result);

// ------------------------------

// 4. Return vs Console.log (IMPORTANT)
function multiply(x, y) {
    console.log(x * y);   // just prints
}

function multiplyReturn(x, y) {
    return x * y;        // gives value back
}

multiply(3, 4);

let output = multiplyReturn(3, 4);
console.log("Returned value:", output);

// ------------------------------

// 5. Default Parameters
function sayHi(name = "Guest") {
    console.log("Hi", name);
}

sayHi();
sayHi("Ambady");

// ------------------------------

// 6. Why functions matter
// Without functions → repeated code
// With functions → reusable logic
