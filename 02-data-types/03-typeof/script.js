// JavaScript typeof Operator


// String

let name = "Tejas";

console.log(typeof name);


// Number

let age = 22;

console.log(typeof age);


// Boolean

let isStudent = true;

console.log(typeof isStudent);


// Undefined

let score;

console.log(typeof score);


// Null

let data = null;

console.log(typeof data);


// BigInt

let bigNumber = 12345678901234567890n;

console.log(typeof bigNumber);


// Symbol

let id = Symbol("id");

console.log(typeof id);


// Object

const user = {
    name: "Tejas",
    age: 22
};

console.log(typeof user);


// Array

const languages = ["HTML", "CSS", "JavaScript"];

console.log(typeof languages);


// Function

function greet() {
    console.log("Hello");
}

console.log(typeof greet);


// Important typeof Behavior

console.log(typeof null);      // "object"
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
console.log(typeof function() {}); // "function"