// reduce reduces an array to a single value
// Can sum, multiply, flatten, build objects, anything.

// ==============================
// ARRAY REDUCE METHOD
// ==============================

// 1. Sum of array
let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log("Sum:", sum);

// ------------------------------

// 2. Maximum value
let max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log("Max:", max);

// ------------------------------

// 3. Flatten an array of arrays
let nested = [[1, 2], [3, 4], [5, 6]];

let flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened:", flat);

// ------------------------------

// 4. Count occurrences of elements
let fruits = ["apple", "banana", "apple", "mango", "banana"];

let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log("Count:", count);

// ------------------------------

// 🚨 Harsh Reality:
// reduce can replace map + filter + loops
// But if you misuse it → unreadable code
// Always think: accumulator first, current second
