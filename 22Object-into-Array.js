// object into (convert to )  array
// 3 way
//  Object.keys()      Object.values()    Object.entries()

const admi = {
  name: "ali",
  place: "sagarpur",
};

const obj2array = Object.keys(admi);
console.log("Object to array (keys only)= ", obj2array); // output = 'name', 'place'

const obj2arrayValue = Object.values(admi);
console.log("Object to array (values only)= ", obj2arrayValue); // output = 'ali', 'sagarpur'

const obj2arrayEntries = Object.entries(admi);
console.log(
  "Object to array (keys and values both in nested array)= ",
  obj2arrayEntries
);          //output  =  [Array(2), Array(2)]
