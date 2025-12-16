// ==============================
// ARROW FUNCTIONS
// ==============================

// 1. Normal Function
function add(a, b) {
    return a + b;
}

console.log("Normal function:", add(2, 3));

// ------------------------------

// 2. Arrow Function (Full Syntax)
const addArrow = (a, b) => {
    return a + b;
};

console.log("Arrow function:", addArrow(2, 3));

// ------------------------------

// 3. Arrow Function (Implicit Return)
const multiply = (a, b) => a * b;

console.log("Implicit return:", multiply(3, 4));

// ------------------------------

// 4. Single Parameter (no brackets)
const square = x => x * x;

console.log("Square:", square(5));

// ------------------------------

// 5. Arrow Function with No Parameters
const sayHello = () => {
    console.log("Hello from arrow function");
};

sayHello();

// ------------------------------

// 🚨 Remember:
// Arrow functions are shorter
// But NOT always better
// You’ll understand why when we reach `this`
