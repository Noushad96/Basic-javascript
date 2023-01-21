// Function

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls ya run  it).

//  function is global scope

// Syntax
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }

// function declaration

function myfunc() {
  console.log("my first function");
}

myfunc(); //to call the function

function sum() {
  console.log(5 + 6);
}
sum();

function sum() {
  return 5 + 6;
}
console.log("acess funtion which has return=", sum());

const myfuncvar = sum();
console.log("access funtion using variable=", myfuncvar);

// function with parameter

function sumNum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log("function with no parameter value then return NaN == ", sumNum());

console.log(
  "if there is undefined value then return NaN == ",
  5 + 6 + undefined
);

console.log("function with parameter == ", sumNum(6, 4, 6));

// what i want
// input = number
// output= true or false  if even

function myeven(number) {
  if (number % 2 == 0) {
    return true;
  }
  //   else {
  //     return false;
  //     }
  return false;
}

function myeven(number) {
  return number % 2 == 0;
}
console.log("check whether the number is even or not =", myeven(6));

// what i want
// input = array , target(number )
// output = index of target if present else (not present)

function checkTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return "not found";
}
const arr = [15, 45, 78];
const ans = checkTarget(arr, 5);
console.log("check the target present or not= ", ans);

// function  for string
function mychar(mystr) {
  return mystr[0];
}
console.log("first character of my string= ", mychar("ali"));
