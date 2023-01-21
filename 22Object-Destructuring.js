// Destructuring  object

const myobj = {
  name: "ram",
  myclass: "5th",
  school: "tent wala",
  address: "sagarpur",
  state: "delhi",
};

const { name: mynamedvar, myclass, school, ...restProp } = myobj;

console.log("variable name=", mynamedvar);

console.log("variable myclass=", myclass);
console.log("variable school =", school);
console.log("rest value of in restProp = ", restProp);
