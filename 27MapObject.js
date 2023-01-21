// Map object
// A Map holds key-value pairs where the keys can be any datatype

// map is iterable
// data stored in map is ordered
// store key value pair( like a object )
// duplicate keys are not allowed like objects

// difference  between map and object
// object key can only have string or symbol
// map key can use anything like array, number, String

// Object ko object literal bhi bolte hai
// keys --- always --- string
// keys --- or in  --- symbol
// const objperson = {
//   name: "ali",
//   age: 25,
//   address: "sagarpur",
// };

// console.log("access object using dot notation = ", objperson.name);
// console.log("access object using bracket notation = ", objperson["name"]);

// ============= map =======
//  key kisi bhi type ki ho sakti hai like string,array,number
const mapperson = new Map();

// add elements to a Map with the set() method
mapperson.set("firstname", "ali");
mapperson.set("age", 25);
mapperson.set([1, 2, 3, 4], "onetwothree");
mapperson.set({ 1: "one" }, "one");
mapperson.set(1, "five"); // key is number
console.log(mapperson);

// ======== to access map ========
// get() method gets the value of a key in a Map
console.log("access map using get method = ", mapperson.get("firstname"));

console.log("access all key using key method = ", mapperson.keys());

// for (let mykey of mapperson.keys()) {
//   console.log(
//     "access key using for of loop and keyss method ---",
//     mykey,
//     "//type = ",
//     typeof mykey
//   );
// }

for (let mykey of mapperson) {
  //   console.log("key value k pair me dega =", mykey);
  console.log("type check kro = ", typeof mykey);
  //   console.log("check array hai ya nhi ==>", Array.isArray(mykey));
}

// destructure
for (let [mykey, value] of mapperson) {
  console.log("using destructure ==>", mykey, value);
}
