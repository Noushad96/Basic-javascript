// computed properties

const key1 = "obkey1";
const key2 = "obkey2";

const value1 = "obvalue1";
const value2 = "obvalue2";

// what i want
// const test = {
//   key1: "obvalue1",
//   key2: "obvalue2",
// };

// mil gya
const obj = {
  key1: value1,
  key2: value2,
};

console.log("key1 = 'obkey1' me variable ka naam hi ayega = ", obj);

// and

// const test = {
//   obkey1: "obvalue1",
//   obkey2: "obvalue2",
// };

const objvalue = {
  [key1]: value1,
  [key2]: value2,
};

console.log("key1 = 'obkey1' me variable ki value hi ayega = ", objvalue);

// is properties se bhi kr sakte hai
// const objvalue = {};
// objvalue[key1] = value1;
// objvalue[key2] = value2;

// console.log(objvalue);
