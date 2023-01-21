// method in string

// trim()
// toUpperCase()
// toLowerCase()
// slice()
//  replace etc

// trim method

let naam = "   pushpender   ";
console.log(naam.length);

naam.trim(); // "pushpender "  give new string
console.log("trim kiya but space k index ko abhi bhi use krega =", naam.length); // = this is immutable(nonchangeable)

// naam me hi trim krna ho to
naam = naam.trim();
console.log("naam variable me hi trim kiya= ", naam.length);

// naya variable bana k trim kro

let newNaam = naam.trim();
console.log("newNaam(without space)=", newNaam);
console.log("newNaam length =", newNaam.length);
