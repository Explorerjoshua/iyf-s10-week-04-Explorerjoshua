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

// ==========================
// Task 8.1: Arrays
// ==========================

console.log("=== Task 8.1: Arrays ===");

// Array basics
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log("First fruit:", fruits[0]);
console.log("Fruits length:", fruits.length);

// Modifying arrays
fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

console.log("Updated fruits:", fruits);

// Array methods
numbers.forEach(num => console.log("Double:", num * 2));

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

console.log("Includes 3:", numbers.includes(3));

// Build tasks
const nums = [2, -5, 12, 8, -1, 20];

const doubledNums = nums.map(n => n * 2);
const positiveNums = nums.filter(n => n >= 0);
const greaterThan10 = nums.find(n => n > 10);
const product = nums.reduce((acc, n) => acc * n, 1);

console.log("Doubled:", doubledNums);
console.log("Positive:", positiveNums);
console.log(">10:", greaterThan10);
console.log("Product:", product);


// ==========================
// Task 8.2: Objects
// ==========================

console.log("=== Task 8.2: Objects ===");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modify
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

console.log("Updated person:", person);

// Object methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log("Add:", calculator.add(5, 3));

// Object iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log("Keys:", Object.keys(scores));
console.log("Values:", Object.values(scores));
console.log("Entries:", Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}


// ==========================
// Task 8.3: Array of Objects
// ==========================

console.log("=== Task 8.3: Array of Objects ===");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Names
const names = students.map(s => s.name);
console.log("Names:", names);

// 2. Grade > 80
const highAchievers = students.filter(s => s.grade > 80);
console.log("High achievers:", highAchievers);

// 3. Find Charlie
const charlie = students.find(s => s.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Average grade
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Average grade:", avgGrade);

// 5. CS majors
const csMajors = students.filter(s => s.major === "CS");
console.log("CS students:", csMajors);

// 6. Sort by grade (descending)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted:", sortedByGrade);

// 7. Any grade > 90
const hasTopStudent = students.some(s => s.grade > 90);
console.log("Has top student:", hasTopStudent);

// 8. All passing
const allPassing = students.every(s => s.grade >= 60);
console.log("All passing:", allPassing);
