// Functions inside function  == function k ander function

// single function
const myfunc = () => {
  console.log("my arrow function");
};
myfunc();

// functions inside function
// ek function k ander multiple function ho sakte hai

const myfunc1 = () => {
  const myfuncIn = () => {
    console.log("functions Inside function");
  };

  const mul = () => {
    console.log("multiplication=", 2 * 6);
  };

  const add = (num1, num2) => {
    console.log("Addition =", num1 + num2);
  };

  console.log("my arrow function");

  myfuncIn(); //to call function
  mul(); //to call function
  add(12, 8); //to call function
};
myfunc1();
