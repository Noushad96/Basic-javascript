// Default parameter

// before 2015(ES6)
function Add(num1, num2) {
  return num1 + num2;
}
console.log("agar ek parameter ki value na de to NaN dega=", Add(4)); //NaN

function Addfunc(num1, num2) {
  if (typeof num2 === "undefined") {
    num2 = 0;
  }
  return num1 + num2;
}

console.log("agar ek parameter ki value na de to=", Addfunc(4)); //4
console.log("agar dono parameter ki value na de to=", Addfunc(4, 4));
8;

// after ES6
// ES6 allows function parameters to have default values

function Addnum(numm1, numm2 = 1) {
  return numm1 + numm2;
}
console.log("using default parameter introduced in ES6=", Addnum(4)); //4+1 =5
console.log("using default parameter introduced in ES6=", Addnum(4, 4)); //4+4 =8
