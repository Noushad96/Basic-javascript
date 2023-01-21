// while loop = loops through a block of code as long as a specified condition is true.

// 0 se 9
// dry == don't repeat yourself
// let i = 0; // 1 2 3 4

// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

// Syntax
// while (condition) {
//     block of code
// }

// while (i <= 9) {
//   console.log(i);
//   i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");

// while loop example
let num = 11;
let total = 0; //1 + 2 +3
// let i = 0;

// while (i <= 100) {
//   total = total + i;
//   i++;
// }

// console.log("Total =", total);

// without using while loop
// sum of n natural numnber = (n*(n-1)/2)
// let total1 = (num * (num + 1)) / 2;
// console.log("Total = ", total1);

// If you forget to increase the variable used in the condition, the loop will never end.
// This will crash your browser.

let text = "";
let i = 0;
while (i < 15) {
  text += "<br>The number is " + i;
  console.log("The number is=", i);
  i++;
}
console.log("The last number is =", i);
document.getElementById("base").innerHTML = text;
