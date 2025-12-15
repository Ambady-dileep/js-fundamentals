// ==============================
// JAVASCRIPT CONDITIONALS
// ==============================

// 1. BASIC IF
let age = 19;

if (age >= 18) {
    console.log("Eligible to vote");
}

// 2. IF ELSE
let balance = 500;

if (balance > 1000) {
    console.log("Sufficient balance");
} else {
    console.log("Low balance");
}

// 3. ELSE IF
let marks = 72;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 4. TRUTHY & FALSY
let username = "";

if (username) {
    console.log("User exists");
} else {
    console.log("User not found");
}

// 5. REAL WORLD CHECK
let isLoggedIn = true;
let hasSubscription = false;

if (isLoggedIn && hasSubscription) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// 🚨 JavaScript treats these as false (falsy values):
// false
// 0
// ""
// null
// undefined
// NaN

// Everything else is true.
