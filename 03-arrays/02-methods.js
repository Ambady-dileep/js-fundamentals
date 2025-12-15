// ==============================
// JAVASCRIPT ARRAYS - METHODS
// ==============================

let fruits = ["apple", "banana", "mango"];

// 1. PUSH - add to end
fruits.push("orange");
console.log("After push:", fruits);

// 2. POP - remove from end
fruits.pop();
console.log("After pop:", fruits);

// 3. UNSHIFT - add to start
fruits.unshift("grape");
console.log("After unshift:", fruits);

// 4. SHIFT - remove from start
fruits.shift();
console.log("After shift:", fruits);

// 5. SLICE - extract part (does NOT change original)
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);
console.log("Original after slice:", fruits);

// 6. SPLICE - add/remove elements (changes original)
fruits.splice(1, 1, "kiwi");
console.log("After splice:", fruits);

// 7. INDEXOF - find index of element
console.log("Index of mango:", fruits.indexOf("mango"));
console.log("Index of papaya:", fruits.indexOf("papaya")); // -1

// 8. INCLUDES - check existence
console.log("Includes banana:", fruits.includes("banana"));
console.log("Includes papaya:", fruits.includes("papaya"));

// 9. JOIN - convert array to string
let joined = fruits.join(", ");
console.log("Joined fruits:", joined);

// 10. CONCAT - merge arrays
let moreFruits = ["pineapple", "berry"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated array:", allFruits);

// 🚨 Harsh truth:
// slice → non-mutating
// splice, push, pop, shift, unshift → mutating
