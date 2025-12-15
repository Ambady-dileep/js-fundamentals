// ==============================
// 1. REVERSE A STRING
// ==============================
let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

// ==============================
// 2. COUNT VOWELS
// ==============================
let text = "Ambady Dileep";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
    if (vowels.includes(char)) count++;
}
console.log("Number of vowels:", count);

// ==============================
// 3. CHECK PALINDROME
// ==============================
let word = "level";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}
console.log("Is palindrome:", word === reversedWord);

// ==============================
// 4. FIND DUPLICATES
// ==============================
let sample = "programming";
let duplicates = {};

for (let char of sample) {
    duplicates[char] = (duplicates[char] || 0) + 1;
}

for (let key in duplicates) {
    if (duplicates[key] > 1) console.log("Duplicate character:", key);
}

// ==============================
// 5. CAPITALIZE FIRST LETTER OF EACH WORD
// ==============================
let sentence = "hello world from js";
let wordsArray = sentence.split(" ");
for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
}
let capitalized = wordsArray.join(" ");
console.log("Capitalized sentence:", capitalized);
