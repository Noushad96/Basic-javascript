// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 5. Null
// 7. Object

// SUBA NON short cut to remember

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans

let num1 = 5;
let num2 = 5;
let num3 = 6;
console.log(num1 == num2); // Returns true

console.log(num1 == num3); // Returns false

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// When adding a number and a string, JavaScript will treat the number as a string.
let strnum = 16 + "rahul";

console.log(
  "adding number and string, js will treat the number as a string.= ",
  strnum
);

// undefined

let rahul; // Value is undefined, type is undefined
raj = undefined;
console.log(" undefined value of raj =", typeof raj);

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMyNumber);

// null

let myVariable = null;
console.log("variable null = ", myVariable);
myVariable = "Johnson";
console.log("variable value and type = ", myVariable, typeof myVariable);
console.log("typeof null give object = ", typeof null);
