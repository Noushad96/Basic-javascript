// find method  ==> ye bhi array ka hi method hai

// ===== find =====

// input lega [callback function] ko
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns [undefined] if no elements are found.
// The find() method does not execute the function for[ empty elements].
// The find() method does not change the original array.

// Syntax
// array.find(function(currentValue, index, arr),thisValue)

// Return Value
// Type	             Description
// A value	         The value of the first element that pass the test.
//                   Otherwise it returns undefined.

const myAnimal = ["lion", "monkey", "cat", "dog"];

// function checkLenght(mystr) {
//   return mystr.length === 3;
// }

// const check = checkLenght("dogg"); /// true agar lenght == 3 hui to warna false
// const check = myAnimal.find(checkLenght);
// console.log(check);

//===> function expression and arrow functon  use

const check = myAnimal.find((mystr) => mystr.length === 3);
console.log(check);

// ===> realistic example

const myusers = [
  { userID: 1, userName: "ali" },
  { userID: 2, userName: "khali" },
  { userID: 3, userName: "bali" },
  { userID: 4, userName: "wali" },
  { userID: 5, userName: "bahabali" },
];

// function myfilter(mycheck) {
//   return mycheck.userID === 3;
// }

// const myans = myusers.find(myfilter);

const myans = myusers.find((mycheck) => mycheck.userID === 3);

console.log(myans);
