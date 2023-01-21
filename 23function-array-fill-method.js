// fill() method   ye bhi array ka hi method hai

// ============== fill() method ==============
// input lega callback function ko

// The fill() method fills specified elements in an array with a value.
// The fill() method [overwrites] the original array.
// Start and end position can be specified. If not, all elements will be filled.

// Syntax
// array.fill(value, start, end)

// Return Value
// Type	           Description
// An array	       The filled array.

const myarr = new Array(10).fill(1);
console.log(myarr);

const mynumber = [2, 4, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
mynumber.fill("filled", 2, 6);
console.log(
  "filled array element, index start with 2 and ends 6(n-1)=",
  mynumber
);
