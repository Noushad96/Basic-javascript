//  ============ class keyword ===========
// ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

// =============================================================
// A JavaScript class is not an object.
// It is a template for JavaScript objects.
// ============================================================

// JavaScript Class Syntax
// Use the keyword class to create a class.
// Always add a method named constructor():

// Syntax
// class ClassName {
//   constructor() { ... }
// }

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);
