// // ==============================
// // ARRAY MAP METHOD
// // ==============================

// // 1. Basic map example
// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map(function (num) {
//     return num * 2;
// });

// console.log("Original:", numbers);
// console.log("Doubled:", doubled);

// // ------------------------------

// // 2. Map using arrow function
// let squared = numbers.map(num => num * num);
// console.log("Squared:", squared);

// // ------------------------------

// // 3. Map with strings
// let names = ["ambady", "dileep", "js"];

// let capitalNames = names.map(name => name.toUpperCase());
// console.log("Capital names:", capitalNames);

// // ------------------------------

// // 4. Map with objects
// let users = [
//     { name: "Ambady", age: 19 },
//     { name: "Rahul", age: 22 },
//     { name: "Anu", age: 18 }
// ];

// let userNames = users.map(user => user.name);
// console.log("User names:", userNames);

// // ------------------------------

// // 🚨 Remember this:
// // map ALWAYS returns a new array
// // NEVER use map if you don't return

// ======================================================================================
// // Question 1
// // Write a map() function that takes an array of numbers and returns a new array where each number is replaced with its absolute value.

// function getAbsoluteValues(arr1){
//     return arr1.map(num=>Math.abs(num))
// }
// const arr1 = [7,5,3,8,1,9]
// console.log(getAbsoluteValues(arr1))

// Question 2
// Given an array of strings, use map() to return a new array where each string is reversed.

// function reverseStrings(words){
//     return words.map(str => str.split('').reverse().join(''));
// }
// const words = ["hello", "world", "js"];
// console.log(reverseStrings(words));

// // Question 3
// // Write a map() function that takes an array of objects (e.g., {name: 'Alice', age: 25}) and returns a new array with only the names in uppercase.

// function getUppercaseNames(people){
//     people.map((person)=>person.name.toUpperCase());
// }
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 }
// ];

// console.log(getUppercaseNames(people));
// // Output: ["ALICE", "BOB", "CHARLIE"]

// // Question 4
// // Use map() to transform an array of numbers into an array of objects, where each object has properties for the original number and its square.
// function numberWithSquare(numbers) {
//     return numbers.map(num => ({
//         value: num,
//         square: num * num
//     }));
// }

// const numbers = [2, 3, 4];
// console.log(numberWithSquare(numbers));

// // Question 5
// // Given an array of mixed types (e.g., [1, 'hello', true, 2, 'world']), use map() to return a new array where each element is replaced with its type as a string (e.g., 'number', 'string', 'boolean').
// function typeFinding(mixedArray){
//     return mixedArray.map(i=>typeof i)
// }
// const mixedArray = [1, 'hello', true, 2, 'world']
// console.log(typeFinding(mixedArray))
