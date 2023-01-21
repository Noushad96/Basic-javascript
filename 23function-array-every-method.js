// every method  ==> ye bhi array ka hi method hai

// ===== every method =====
// input lega callback function ko
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array.

const mynumber = [2, 4, 6, 8, 10];
const mynumber2 = [2, 4, 6, 8, 9];

// every element should be true than only it will return true

const mycheck = mynumber.every((Number) => Number % 2 === 0);
const mycheck2 = mynumber2.every((Number) => Number % 2 === 0);

// callback function  -----> true/false (boolean)
// every method  -----> true/false (boolean)

console.log(
  "condition true hui sabhi element pe to hi return krega true = ",
  mycheck
);
console.log(
  "agar condition ek bhi element pe false hui to return krega false=",
  mycheck2
);

// realistic example

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "ac", price: 20000 },
  { productId: 4, productName: "tv", price: 15000 },
];

const user = userCart.every((mycart) => mycart.price > 30000);
console.log("kya sabhi ka price>30000 se kam hai ya nhi = ", user);
