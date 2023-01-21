// object is non-primitive(reference) Type
// Array is good but not sufficient for real world data
// Object does not have index
// object store key(properties) and value

// key = string by default

// How to create a Object

const person = {
  name: "noushad",
  age: 25,
  school: "sarkari",
  hobbies: ["cricket", "dance", "music"],
};

// ya aise bhi hub object bna sakte hai
// const person = {
//   "name": "noushad",
//   "age": 25,
//   "school": "sarkari",
//   "hobbies": ["cricket", "dance", "music"],
// };

console.log("object person =", person);
console.log("object person typeof =", typeof person);

// access data from object
console.log("object person access value using key(name)=", person.name);
console.log("object person access value using key(age)=", person.age);
console.log("object person access value using key(school)=", person.school);
console.log("object person access value using key(hobbies)=", person.hobbies);

console.log("key is always string by default ==", person["name"]);

//  add key value pair to object

// with dot(.) notation
// person.colleg = "meri";


// with [] notation
person["colleg"] = "meri";
console.log("After adding key value pair=", person);
