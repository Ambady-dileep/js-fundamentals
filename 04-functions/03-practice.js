// ==============================
// FUNCTION PRACTICE PROBLEMS
// ==============================

// 1. Check Even or Odd
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7));  // false

// ------------------------------

// 2. Find Maximum of Two Numbers
function findMax(a, b) {
    return a > b ? a : b;
}

console.log(findMax(10, 20));

// ------------------------------

// 3. Reverse a String
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseString("javascript"));

// ------------------------------

// 4. Count Characters in a String
function countChars(str) {
    return str.length;
}

console.log(countChars("hello"));

// ------------------------------

// 5. Check Palindrome
function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// ------------------------------

// 🚨 Remember :
// Functions should RETURN values
// Not just print
