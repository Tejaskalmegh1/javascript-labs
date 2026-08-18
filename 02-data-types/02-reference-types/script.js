// JavaScript Reference Types


//  Object

const user = {
    name: "Tejas",
    age: 22,
    city: "Pune"
};

console.log(user);
console.log(user.name);
console.log(user.age);


//  Array

const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(languages);
console.log(languages[0]);
console.log(languages[2]);


// Function

function greet() {
    console.log("Hello JavaScript!");
}

greet();


// Objects Can Be Modified

const student = {
    name: "Tejas",
    age: 22
};

student.age = 23;

console.log(student);


// Arrays Can Be Modified

const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);


// Reference Example

const person1 = {
    name: "Tejas"
};

const person2 = person1;

person2.name = "John";

console.log(person1);
console.log(person2);