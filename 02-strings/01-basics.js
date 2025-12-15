// ==============================
// JAVASCRIPT STRINGS - BASICS
// ==============================

// 1. STRING CREATION
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `JS Strings`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backtick);

// 2. STRING LENGTH
let name = "Ambady";
console.log("Length of name:", name.length);

// 3. STRING INDEXING
console.log("First character:", name[0]);
console.log("Last character:", name[name.length - 1]);

// 4. IMMUTABILITY (VERY IMPORTANT)
name[0] = "X";   // ❌ Doesn't change the string
console.log(name); // still "Ambady"

// 5. ACCESSING CHARACTERS USING charAt()
console.log(name.charAt(0));
console.log(name.charAt(10)); // returns empty string, no error

// 6. LOOPING OVER A STRING
let message = "Hello";

for (let i = 0; i < message.length; i++) {
    console.log(`Character at index ${i}:`, message[i]);
}

// 7. REAL WORLD EXAMPLES
let userInput = "  dileep  ";
console.log("Trimmed input:", userInput.trim());
console.log("Uppercase:", userInput.toUpperCase());
console.log("Lowercase:", userInput.toLowerCase());

// 🚨 Remember: Strings are immutable
// Any method like toUpperCase(), slice() returns a NEW string
// The original string does NOT change unless reassigned
