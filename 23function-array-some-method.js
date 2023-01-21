// some() method   ye bhi array ka hi method hai

// ============== some() method ==============
// input lega callback function ko

// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Syntax
// array.some(function(value, index, arr), this)
// Return Value
// Type	          Description
// A boolean	    true if any of the aray elements pass the test, otherwise false.

// anyone element should be true than it will return true else false

const mynumber = [2, 4, 6, 8, 10];
const mynumber2 = [1, 3, 5, 7, 9];

const mycheck = mynumber.some((Number) => Number % 2 === 0);
const mycheck2 = mynumber2.some((Number) => Number % 2 === 0);

console.log(
  "koi ek bhi element pe condition true hua to return krega true = ",
  mycheck
);

console.log(
  "agar condition ek bhi element pe satisfied nhi hui to return krega false=",
  mycheck2
);

// realistic example

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "ac", price: 20000 },
  { productId: 4, productName: "tv", price: 15000 },
];

const user = userCart.some((mycart) => mycart.price > 30000);
console.log("kya kisi ek ka bhi price>30000 se jyada hai ya nhi = ", user);
