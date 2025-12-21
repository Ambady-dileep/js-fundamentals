// ==============================
// OBJECT METHODS & THIS
// ==============================

let user = {
    name: "Ambady",
    age: 19,

    // 1. Method inside object
    greet: function () {
        console.log("Hello, my name is", this.name);
    },

    // 2. Another method
    getAge: function () {
        return this.age;
    }
};

user.greet();
console.log("Age:", user.getAge());

// ------------------------------

// 3. Updating object using method
let account = {
    owner: "Ambady",
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
    },

    getBalance: function () {
        return this.balance;
    }
};

account.deposit(500);
account.withdraw(300);
console.log("Final balance:", account.getBalance());

// ------------------------------

// 🚨 VERY IMPORTANT TRUTH
// `this` refers to the object calling the method
// NOT where the function is written

// ------------------------------

// ❌ Arrow function inside object (BAD example)
let badUser = {
    name: "Wrong",

    greet: () => {
        console.log(this.name);
    }
};

badUser.greet(); // undefined (or global)

// Arrow functions do NOT have their own `this`
