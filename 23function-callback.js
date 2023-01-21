// callback Function
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

//  "Higher order function" =>(Functions that operate on other functions,
// either by taking them as arguments or by returning them, are called higher - order functions)

function myfuncTwo() {
  console.log("Hello from myfuncTwo");
}

// function myfuncOne(para1) {
//   //   console.log("hello from myfunOne", para1); //pura function aa gya
//   console.log("hello from myfuncOne and access myfuncTwo ");
//   para1(); //access myfunTwo function with the parameter
// }

// myfuncOne(myfuncTwo);

function myfuncOne(callback) {
  //   console.log("hello from myfunOne", para1); //pura function aa gya
  console.log("hello from myfuncOne and access myfuncTwo ");
  callback(); //access myfunTwo function with the parameter
}
myfuncOne(myfuncTwo);
