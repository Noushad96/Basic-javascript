// For in loop in array

// for in statement loops through the properties(index ) of an Object:

// isse kam use kiya jata hai 

// Syntax
// for (key(index) in object) {
//     // code block to be executed
//   }

const arr1 = ["apple", "mango", "grapes", "orange", "walermelon"];

// const arr2 = [];
for (let ar in arr1) {
  //   arr2.push(ar);
  console.log("index of array1=", ar);
}

for (let ar in arr1) {
  //   arr2.push(ar);
  console.log("index of array1=", ar, arr1[ar]);
}
