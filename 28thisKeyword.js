// this keyword

// this keyword refers to an object

// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in [strict mode], this is [undefined].
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

console.log(this);
console.log(window);
console.log("kya this and window equal hai =>", this === window);

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("invoke function ==>", person.fullName());

function myfunc() {
  console.log("hello");
}
this.myfunc();
window.myfunc();
