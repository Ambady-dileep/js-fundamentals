// ==============================
// JAVASCRIPT ARRAYS - BASICS
// ==============================

// 1. ARRAY CREATION
let numbers = [10, 20, 30, 40];
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "two", true, null];

console.log(numbers);
console.log(fruits);
console.log(mixed);

// 2. ACCESS ELEMENTS
console.log("First number:", numbers[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 3. ARRAY LENGTH
console.log("Numbers length:", numbers.length);
console.log("Fruits length:", fruits.length);

// 4. MODIFY ELEMENTS
numbers[1] = 25;
console.log("Modified numbers:", numbers);

// 5. IMMUTABILITY FACT (FOR ARRAYS)
let original = [1,2,3];
let copy = original; // points to same array
copy[0] = 99;
console.log("Original after modifying copy:", original); // changed

// 6. LOOPING OVER ARRAYS
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i]);
}

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}
