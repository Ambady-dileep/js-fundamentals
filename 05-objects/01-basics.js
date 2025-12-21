// ==============================
// OBJECT BASICS
// ==============================

// 1. Creating an Object
let user = {
    name: "Ambady",
    age: 19,
    country: "India",
    isStudent: true
};

console.log(user);

// ------------------------------

// 2. Accessing Properties
console.log(user.name);        // dot notation
console.log(user["age"]);      // bracket notation

// ------------------------------

// 3. Updating Properties
user.age = 20;
user.country = "IN";

console.log(user);

// ------------------------------

// 4. Adding New Properties
user.email = "ambady@example.com";

console.log(user);

// ------------------------------

// 5. Deleting Properties
delete user.isStudent;

console.log(user);

// ------------------------------

// 🚨 Reality:
// Objects = grouped data
// Without objects → messy variables everywhere
