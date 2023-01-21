// ============  new keyword ==============
// New keyword is used to create an instance of an object that has a constructor function.

// The new object’s internal ‘Prototype’ property (__proto__) is~
// ~set the same as the prototype of the constructing function

// The ‘this’ variable is made to point to the newly created object.~
//  ~It binds the property which is declared with ‘this’ keyword to the new object.

// About the returned value, there are three situations below.
//   1. If the constructor function returns a non-primitive value (Object, array, etc),
//      the constructor function still returns that value.
//      Which means the new operator won’t change the returned value.
//   2. If the constructor function returns nothing, ‘this’ is return;
//   3. If the constructor function returns a primitive value,
//      it will be ignored, and ‘this’ is returned.

// new keyword
// 1.) this = {} ==>  A new empty object is created. and empty object ki value this hai.
// 2.) return this(value) {} ==> If the constructor function returns a non-primitive value (Object, array, etc),
//  the constructor function still returns that value.
// Which means the new operator won’t change the returned value

// __proto__
// // official ecmascript document
// [[prototype]]

// function
function Fruit(color, taste, seeds) {
  this.color = color;
  this.taste = taste;
  this.seeds = seeds;
}

// Create an object
const fruit1 = new Fruit("Yellow", "Sweet", 1);

// Display the result
// console.log("fruit functin ka display first= ", fruit1.color);
console.log("fruit functin ka display = ", fruit1);

// function func() {
//   var c = 1;
//   this.a = 100;
// }

// // Set the function prototype
// func.prototype.b = 200;

// // Create an object
// var obj = new func();

// // Display the result
// console.log("a ki value =", obj.a);
// console.log("next line = \n", "\n");
// console.log("b ki value = ", obj.b);

// constructor function
// function CreateUser(firstName, lastName, email, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }
// CreateUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };
// CreateUser.prototype.sing = function () {
//   return "la la la la ";
// };

// const user1 = new CreateUser(
//   "harshit",
//   "vashsith",
//   "harshit@gmail.com",
//   18,
//   "my address"
// );
// const user2 = new CreateUser(
//   "harsh",
//   "vashsith",
//   "harshit@gmail.com",
//   19,
//   "my address"
// );
// const user3 = new CreateUser(
//   "mohit",
//   "vashsitha",
//   "harshit@gmail.com",
//   17,
//   "my address"
// );
// console.log(user1);
// console.log(user1.is18());
