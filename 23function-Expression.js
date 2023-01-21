// function Expression

// A JavaScript function can also be defined using an expression
// A function expression can be stored in a variable

// direct function declaration
// function myfunc() {
//   console.log("my first function");
// }

// variable bna k
// myfunc();

const myfunc = function () {
  console.log("my first function");
};
myfunc();
// function above is anonymous function (a function without a name)
// Functions stored in variables do not need function names.
// They are always invoked(called) using the variable name.

// function with parameter

// direct function declaration

// function sumNum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// variable bna k
const sumNum = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log("sum using function expression", sumNum(5, 4, 6));
