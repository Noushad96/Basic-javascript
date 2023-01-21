// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

let naam = "pushpender";
console.log("Lenght of the string =", naam.length);

// toUpperCase()

let newnaam = naam.toUpperCase();
console.log("UpperCASE = ", newnaam);
console.log("UpperCASE direct = ", naam.toUpperCase());

// toLowerCase()
let newnaamLOW = naam.toLowerCase();
console.log("LowerCASE = ", newnaamLOW);

console.log("type of (naam) = ", typeof naam);

let age = 22;
let firstName = "pushpender";

console.log("type of (age) = ", typeof age);

// 22 -> "22"
// convert number to string.
age = age + "";
console.log("type of (number to string) = ", typeof age);
// ("22");

// convert string to number.

let myStr = +"34";
console.log("type of (string to number) = ", typeof myStr);

let aged = "18";
aged = Number(aged);
console.log("type of (number) = ", typeof aged);
