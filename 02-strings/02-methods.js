// ==============================
// JAVASCRIPT STRINGS - METHODS
// ==============================

let name = "  Ambady Dileep  ";

// 1. TRIM - remove whitespace from both ends
console.log("Trimmed:", name.trim());

// 2. TO UPPERCASE / TO LOWERCASE
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());

// 3. SLICE - extract part of string
console.log("Slice (0,5):", name.slice(0,5));  // Ambad
console.log("Slice (-6):", name.slice(-6));    // Dileep

// 4. SUBSTRING - similar to slice
console.log("Substring (0,5):", name.substring(0,5)); // Amb

// 5. INCLUDES - check if string contains a substring
console.log("Includes 'Dileep':", name.includes("Dileep"));
console.log("Includes 'JS':", name.includes("JS"));

// 6. REPLACE - replace a substring (returns new string)
console.log("Replace 'Ambady' with 'John':", name.replace("Ambady","John"));

// 7. STARTS/WITH and ENDSWITH
console.log("Starts with '  Ambady':", name.startsWith("  Ambady"));
console.log("Ends with 'Dileep  ':", name.endsWith("Dileep  "));

// 8. SPLIT - convert string to array of words
let words = name.trim().split(" ");
console.log("Split into words:", words);

// 9. CONCAT - join strings
let greeting = "Hello, ".concat("world!");
console.log(greeting);

// 10. REPEAT - repeat string N times
console.log("Repeat:", "Ha! ".repeat(3));

// 🚨 Remember: All these methods return a NEW string. Original string does NOT change unless reassigned.
console.log("Original string remains:", name);
