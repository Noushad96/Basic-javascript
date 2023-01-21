// intro to for loop
// For  = loops through a block of code a number of times

// for (Expression1; Expression2;Expression3){
//     code block
// }

// Expression1 = sets a variable before the loop starts
// Expression2 = defines the condition for the loop to run
//  Expression3 = increases a value (i++) each time the code block in the loop has been executed.

// print 0 to 9
// let i = 0;
// for (; i <= 9; i++) {
//   console.log("number is  =", i);
// }

// for (let i = 0; i <= 9; i++) {
//   console.log(i);
//   // console.log("value of i is ", i);
// }

// variable doesnot  exist outside for loop
// console.log("value of i is ", i);

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }

// variable exist outside for loop
// console.log("value of i is ", i);

// for loop example

let total = 0;
let num = 100;
for (let i = 1; i <= num; i++) {
  total = total + i;
}

console.log("Total =", total);
