// Diffrence between Dot VS Bracket notation

// javascript me spaces allowed nhi hai

const person = {
  name: "noushad",
  age: 25,
  school: "sarkari",
  //   my hobbies: ["cricket", "dance", "music"],
  "my hobbies": ["cricket", "dance", "music"], // space allowed nhi hai so string me bhi likh sakte hai
};

// console.log(person.my hobbies) // error dega
console.log(person["my hobbies"]);

const keyvar = ["Myemail"];

// person["keyvar"] = "xyz@gmail.com"; // output == keyvar: 'xyz@gmail.com'
person[keyvar] = "xyz@gmail.com"; //output == Myemail: 'xyz@gmail.com'
console.log(person);

