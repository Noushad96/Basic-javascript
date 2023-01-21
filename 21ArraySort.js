// Sorting  of array

let arr1 = ["apple", "mango", "grapes", "orange", "walermelon"];

console.log("Sorting Ascending order=", arr1.sort());

console.log("Sorting descending(reverse) order=", arr1.reverse());

// Numeric Sort
// By default, the sort() function sorts values as strings.
// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
let num = [10, 45, 12, 32, 4, 78, 45, 64, 15];
console.log("Numeric Sort Ascendng order=", num.sort()); // check this

// Using The Compare Function
// alternative sort order For Number

console.log(
  "Numeric Sort Ascending Order=",
  num.sort(function (a, b) {
    return a - b;
  })
);

// minimum Array of number
console.log("Minimum number = ", num[0]);

// Numeric Sort Descending Order=

console.log(
  "Numeric Sort Descending Order=",
  num.sort(function (a, b) {
    return b - a;
  })
);

console.log("Maximum number = ", num[0]);
// Min / Max of Array
