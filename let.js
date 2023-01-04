// introduced in ES6
// connot be redeclared
// must be declared before use
// have block scope
// it is case sensitive

let FirstName = "ali";

FirstName = "kahli reassigned";

console.log(FirstName);

FirstName = "kkhali";
console.log(FirstName);

{
  Firstname = "ram,shyam";
  console.log("from inside=", Firstname);
}

Firstname = "ram";
console.log("from outside=", Firstname);
