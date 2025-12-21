// ==============================
// OBJECT PRACTICE PROBLEMS
// ==============================

// 1. Count properties in an object
let student = {
    name: "Ambady",
    age: 19,
    course: "BCA",
    isActive: true
};

let count = 0;
for (let key in student) {
    count++;
}

console.log("Total properties:", count);

// ------------------------------

// 2. Loop through object and print key-value
for (let key in student) {
    console.log(key + ":", student[key]);
}

// ------------------------------

// 3. Check if property exists
function hasProperty(obj, prop) {
    return prop in obj;
}

console.log(hasProperty(student, "course")); // true
console.log(hasProperty(student, "email"));  // false

// ------------------------------

// 4. Sum numeric values in object
let marks = {
    math: 80,
    english: 75,
    science: 90
};

let total = 0;
for (let subject in marks) {
    total += marks[subject];
}

console.log("Total marks:", total);

// ------------------------------

// 5. Convert object to array
let keys = Object.keys(student);
let values = Object.values(student);

console.log("Keys:", keys);
console.log("Values:", values);

// ------------------------------

// 🚨 Reality:
// Objects represent real data
// Master this → APIs & backend feel easy
