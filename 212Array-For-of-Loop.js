// for of Loop in array

// for of statement loops through the values of an iterable object.

// array me is loop ka jyada use kiya jata hai

// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

const arr1 = ["apple", "mango", "grapes", "orange", "walermelon"];

const arr2 = [];
for (let ar of arr1) {
  arr2.push(ar);
  console.log(ar);
}
console.log(arr2);


// traditional loop jyada use krte hai array k saath
// for (let i = 0; i < arr1.length; i++) {
//   console.log("normal loop=", arr1[i]);
// }
