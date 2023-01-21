// Array Destructuring
// ES6 me aya hai ye

// const fruits = ["apple", "mango", "grapes"];

// const fruits = ["apple", "mango"];

const fruits = ["apple", "mango", "grapes", "banana", "Pineapple"];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// console.log("fruit1=", fruit1);
// console.log("fruit2=", fruit2);
// console.log("fruit3=", fruit3);

// Array Destructuring
// let [fruit1, , fruit3] = fruits;
// let [fruit1, fruit2, fruit3] = fruits;

let [fruit1, fruit2, fruit3, ...rest_var] = fruits;

// fruit1, fruit2, fruit3 ab ye normal variable ban gye hai
//  normal variable ki tarah hum use kr sakte ahi isse

console.log("fruit1=", fruit1);
console.log("fruit2=", fruit2);
console.log("fruit3=", fruit3);
console.log("rest fruit value=", rest_var, typeof rest_var);
