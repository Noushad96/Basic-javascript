// ======== Prototype  ======
// JavaScript is a prototype based language, so, whenever we create a function
//     using JavaScript, JavaScript engine adds a prototype property inside a function,
//     Prototype property is basically an object(also known as Prototype object),
//     where we can attach methods and properties in a prototype object,
//     which enables all the other objects to inherit these methods and properties


// All JavaScript objects inherit properties and methods from a prototype.

// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// JavaScript prototype property allows you to add new properties to object constructors:
// JavaScript prototype property also allows you to add new methods to objects constructors

function hello() {
  console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.

// console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abckey = "abcvalue";
hello.prototype.xyzkey = "xyzvalue";
hello.prototype.singkey = function () {
  return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.singkey());
