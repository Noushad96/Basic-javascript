//  2 types of data type in javascript

// suba non

// A.  Primitive data type
// 1.String
// 2. Boolean
// 3. numbers
// 4. null
// 5. undefined

// B. Non-Primitive(reference) Data Type
// non-primitive data types are known as reference types.
// 1. Object
// 2. Array

// primitive data type
// let num1 = 5;
// let num2 = num1;

// console.log("num1=", num1);
// console.log("num2=", num2);
// num1++;

// console.log("after incrementation");
// console.log("num1", num1);
// console.log("num2", num2);

// console.log("data store on stack");
// console.log("for every variable,primitive have value");

// non-primitive(reference) data type

let arr1 = ["Saab", "Volvo", "BMW"];
let arr2 = arr1;

console.log("array 1 =", arr1);
console.log("array 2= ", arr2);

console.log("after add(push) in array");
arr1.push("audi");

console.log("array 1=", arr1);
console.log("array 2 =", arr2);

console.log(
  "data store on heap and data address on stack,object pointer have address of array"
);

console.log("each array will get pointer");
console.log("pointer will have address of array store on stack");

console.log("dono pointer pe same address hai to dono array me update hoga ");
console.log("memory k pass 1(one) hi array hai ");
console.log("typeof array1=", typeof arr1);
console.log("typeof array2=", typeof arr2);
