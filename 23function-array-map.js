// important Array method   for function

// forEach()
// map()
// filter()
// reduce()

// ============= map() ============

// map() method =>  array ka hi method hai ye

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Syntax
// array.map(function(currentValue, index, arr), thisValue)

// Return Value
// Type	          Description
// An array	      The results of a function for each array element.

const num = [1, 2, 3, 4, 5, 6];

const square = function (number) {
  return number * number; //use return to get an array using map() method
  //   console.log(number * number);   // array me value undefined ho jayegi so use kro return only
};
const sqrnum = num.map(square); // jo return hoga wahi is array me store hoga warna undefined ayega
console.log(sqrnum);

// num.map(square); //console k liye
//
//
// using function expression and map method

// console.log("using function expression and map method");
// const squareNum = num.map(function (number) {
//   return number * number;
// });

console.log("using arrow function expression and map method");
const squareNum = num.map((number, index) => {
  // return number * number;
  return `index: ${index} and value : ${number * number}`;
  //   return index; // store only index
});
console.log("Square number using map method =", squareNum);

const user = [
  { firstName: "ram", add: "agra" },
  { firstName: "shyam", add: "mathura" },
  { firstName: "ghanshyam", add: "deoria" },
  { firstName: "ramdev", add: "delhi" },
];

const myuser = user.map((value) => {
  return value.firstName;
});

console.log(
  "using map() method and arror function,with its parameter=",
  myuser
);
