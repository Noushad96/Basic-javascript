// Arrow => function   very important  as per interview

// Arrow functions were introduced in ES6.

// Note: This works only if the function has only one statement.

// Arrow Function in one statement
let myFunction = (a, b) => a * b;
console.log("Arrow function==", myFunction(2, 6));

// function declaration
// function myfunc() {
//   console.log("my first function");
// }

// function Expression
// const myfunc = function () {
//   console.log("my first function");
// };

// function Arrow

const myfunc = () => {
  console.log("my first Arrow function");
};
myfunc();

// function Expression
// const sumNum = function (num1, num2, num3) {
//   return num1 + num2 + num3;
// };
// console.log("sum using  function expression", sumNum(5, 4, 6));

// function Arrow
const sumNum = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
console.log("sum using Arrow function expression", sumNum(5, 4, 6));

// arrow function

// const myEven = (number) => {
//   return number % 2 == 0;
// };

const myEven = (number) => number % 2 == 0;

console.log("this will act as a variable, output=value in variable==", myEven);
console.log("check odd even using Arrow function", myEven(5));
