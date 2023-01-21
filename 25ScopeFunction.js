// Scope refers to the area where an item (such as a function or variable)
// is visible and accessible to other code.

// Scope determines the accessibility (visibility) of variables and function

// JavaScript has 3 types of scope:
// 1.Block scope        <=============================//introduced in ES6
// 2.Function(Local) scope
// 3.Global scope

// ===============================================
// Function(Local) scope
// Variables declared within a JavaScript function, become LOCAL to the function

// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.

function myFunc() {
  if (true) {
    // let myName = "inside if and function(myFunc())";
    // const myName = "inside if and function(myFunc())";
    var myName = "inside if and function(myFunc())";
    console.log(myName); // let is not access outside this block kyuki let is block scope
  }
  //   console.log(myName); //ReferenceError: myName is not defined at myFunc
  console.log("access variable(var) within function = ", myName);
}
// console.log(myName);  //ReferenceError: myName is not defined  //var cannot access it outside function
myFunc();

// function myFunction() {
//   var carName = "Volvo"; // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo"; // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo"; // Function Scope
// }
