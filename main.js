// ==========================
// Task 7.1: Variables
// ==========================

let name = "Joshua";
let age = 20;
const birthYear = 2005;

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of true:", typeof true);

// Variable practice
let isStudent = true;
let favoriteColors = ["blue", "black", "green"];
let today = new Date();

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", today);

// ==========================
// Task 7.2: Data Types & Operators
// ==========================

// Number operations
let a = 10;
let b = 3;

console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Increment/Decrement
let count = 0;
count++;
count--;
console.log("Count:", count);

// String operations
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

// Comparison & logical
console.log(5 > 3);
console.log(5 === 5);
console.log(true && false);

// Challenge
let ageInDays = age * 365;
let ageInHours = age * 365 * 24;
let year100 = birthYear + 100;

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Turn 100 in:", year100);

// ==========================
// Task 7.3: Functions
// ==========================

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow functions
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Required functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function isEven(num) {
    return num % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Default parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

// Test functions
console.log(greet("Joshua"));
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(divide(10, 2));
console.log(calculateArea(5, 4));
console.log(celsiusToFahrenheit(30));
console.log(isEven(4));
console.log(getInitials("John Doe"));
console.log(reverseString("hello"));
console.log(greetUser());
console.log(calculateTip(100));

// ==========================
// Task 7.4: Control Flow
// ==========================

// If/Else
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log("Grade:", getGrade(85));

// Switch
function getDayName(day) {
    switch(day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(3));

// Loops

// 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Even numbers
for (let i = 2; i <= 50; i += 2) {
    console.log("Even:", i);
}

// FizzBuzz
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Triangle
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
