// object ko iterate krna
// 1. for in loop
// 2. object.key
// 3. for of loop

// Using for in loop
const person = {
  name: "noushad",
  age: 25,
  school: "sarkari",
  hobbies: ["cricket", "dance", "music"],
};

// for (let x in person) {
//   console.log("Iterate object key using for in loop = ", x);
// }

// for (let x in person) {
//   console.log("Iterate object value using for in loop = ", person[x]);
// }

// console.log("pair me chahiye to string template(format) use kr sakte hai");
// for (let x in person) {
//   console.log(`${x}:${person[x]}`);
//   // ya
//   console.log(x, ":", person[x]);
// }

// Using object.key

// console.log("using object.key to get keys", Object.keys(person));

// let check = Array.isArray(Object.keys(person));
// console.log("array dega Object.keys(person)==", check);

// for of loop
//  use to get value of loop
// for of loop Array me jyad use kiya jata hai

// for (let x of Object.keys(person)) {
//   console.log("keys of object =", x);
//   console.log("values =", x, "=", person[x]);
// }
