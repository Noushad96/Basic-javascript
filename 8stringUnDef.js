// undefined
// null ==  mean kuch nhi

// if we do not assign a value to Variable then variable is undefined
let firstName;
console.log(" undefined variable = ", typeof firstName);

//const MidName;    // no assigned any value so giving error

firstName = "Johnson";
console.log("after giving value to variable = ", typeof firstName, firstName);

let myVariable = null;
console.log("variable null = ", myVariable);
myVariable = "Johnson";
console.log("variable value and type = ", myVariable, typeof myVariable);
console.log("typeof null give object = ", typeof null);
// bug , error

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log("max number bigint can store(16digit)=", Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(myNumber + sameMyNumber);
