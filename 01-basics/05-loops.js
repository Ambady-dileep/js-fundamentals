// ==============================
// JAVASCRIPT LOOPS
// ==============================

// 1. FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("For loop count:", i);
}

// 2. WHILE LOOP
let count = 1;

while (count <= 3) {
    console.log("While loop count:", count);
    count++;
}

// 3. DO WHILE LOOP
let num = 1;

do {
    console.log("Do while count:", num);
    num++;
} while (num <= 2);

// 4. BREAK
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Break example:", i);
}

// 5. CONTINUE
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue example:", i);
}
