// Function returning function
//  Higher order function =>(Functions that operate on other functions, 
// either by taking them as arguments or by returning them, are called higher - order functions)

function merafunc() {
  function myIn() {
    console.log("i'm from inside of function");
    return "hello myIn function";
  }
  return myIn;
  //   myIn();
}

// console.log(merafunc());
const func = merafunc();
// func();

console.log("return myIn()=", func());
