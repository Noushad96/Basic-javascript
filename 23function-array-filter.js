// important Array method   for function
// input lega callback function ko
// forEach()
// map()
// filter()
// reduce()

// ============= filter() ============
// filter() method =>  array ka hi method hai ye

// The filter() method creates a new array filled with
//  elements that pass a test(condition) provided by a function.

// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const age = [12, 14, 20, 45, 23, 25, 18, 19, 17];

const checkAge = age.filter((myage) => {
  return myage >= 20;
});
console.log("all ages == ", age);
console.log("age >= 20 are ==", checkAge);

// one more example
const checkEven = age.filter((evencheck) => {
  return evencheck % 2 === 0;
});
console.log("even number are ==", checkEven);

// one more example
const checkOdd = age.filter((oddcheck) => {
  return oddcheck % 2 === 1;
});
console.log("odd number are ==", checkOdd);
