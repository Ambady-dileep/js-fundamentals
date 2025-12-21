// ==============================
// CALLBACK FUNCTIONS
// ==============================

// 1. Simple callback example
function greet(name, callback) {
    console.log("Hello", name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ambady", sayBye);

// ------------------------------

// 2. Callback with value
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));

// ------------------------------

// 3. Callback using arrow function
console.log(
    calculate(4, 3, (a, b) => a * b)
);

// ------------------------------

// 🚨 Reality:
// A callback is just a function passed into another function
// JS treats functions as values
