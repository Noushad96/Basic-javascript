// Spread Operator =  concat krne ka tarika hai ye

// Spread Operator in Array
// const ar1 = [45, 12, 35, "array1"];
// const ar2 = [12, 78, 23, "array2"];

// const ar3 = [...ar1, ...ar2];
// console.log(ar3);

// Spread Operator in Object
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
//   key1: "value3", // baad wali key humesha overwrite kregi pehle wali key ko
// };
// console.log(obj1);

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newobj = { ...obj1, ...obj2, key5: "value5" };

console.log("new Object=", newobj);
console.log(obj1);
