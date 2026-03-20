// 1. Store suresh's and ramesh's mass and height in variables.

let sureshMass = 50;
let sureshHeight = 1.4;

let rameshMass = 60;
let rameshHeight = 1.8;

// 2. Calculate both their BMIs using the formula.

let sureshBMI = sureshMass / (sureshHeight * sureshHeight);
let rameshBMI = rameshMass / (rameshHeight * rameshHeight);

// 3. Create a boolean variable 'markHigherBMI' containg info about whether suresh has a higher BMI than ramesh.

let markHigherBMI = sureshBMI > rameshBMI;
console.log("Suresh BMI: ", sureshBMI);
console.log("RameshBMI: ", rameshBMI);
console.log("Suresh has a higher BMI than Ramesh?: ", markHigherBMI);

// Assignment 1: Smart Discount Calculator

let name = prompt("Please enter your name:");
let age = Number(prompt("Please enter your age:"));
let purchaseAmount = Number(prompt("Please enter the total purchase amount:"));
let discount = 0;

if (age < 18) {
  discount += 10;
} else if (age >= 60) {
  discount += 20;
}

if (purchaseAmount > 5000) {
  discount += 5;
}

finalAmount = purchaseAmount - (purchaseAmount * discount) / 100;
console.log(
  `Hi ${name}! You received a total discount of ${discount}%. Final amount:${finalAmount}`,
);

// Assignment 2: Login Validation System

let userName = "admin";
let password = "12345";

let currentUserName = "admin";
let currentPassword = "12345";

if (currentUserName === userName && currentPassword === password) {
  console.log("Login successful! Welcome, " + currentUserName + "!");
} else if (currentUserName !== userName && currentPassword !== password) {
  console.log("Login failed! Both username and password are incorrect.");
} else if (currentUserName !== userName) {
  console.log("Login failed! Username is incorrect.");
} else if (currentPassword !== password) {
  console.log("Login failed! Password is incorrect.");
}

// Assignment 3: Number Analyzer Tool

let num = Number(prompt("Please enter a number:"));
let sign;
let type;

if (num > 0) {
  sign = "positive";
} else if (num < 0) {
  sign = "negative";
} else {
  sign = "zero";
}

if (num % 2 === 0) {
  type = "even";
} else {
  type = "odd";
}

console.log(`The number ${num} is ${sign} and ${type}.`);

// Assignment 4: Shoppng Eligibility Checker

let isMember = true;
let cartValue = 1500;

if ((isMember && cartValue >= 1000) || cartValue >= 2000) {
  console.log("You are eligible for free delivery.");
} else {
  console.log("you are not eligible for free delivery.");
}

// Assignment 5: Grade Evaluation System

let marks = Number(prompt("Please enter your marks:"));
let grade;

if (marks < 0 || marks > 100) {
  grade = "Invalid input.";
} else if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks < 50) {
  grade = "Fail";
}

console.log(`Your grade is: ${grade}`);
