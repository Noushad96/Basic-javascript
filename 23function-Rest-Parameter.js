// Function Rest Parameter
// The rest parameter (...) allows a function to--
// --treat an indefinite number of arguments as an array:

// normal function
function normalfunc(a, b, c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

normalfunc(4, 5, 6, 8, 9, 2, 1, 3);
// Output
// a is 4
// b is 5
// c is 6

console.log("After Rest Param");

// function using Rest parameter
// last me jo bhi value bach gyi rest parameter me daal do
function RestParam(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`); // string format use kiya ha to object me de rha hai

  console.log(`c is`, c); //Array ban gya
}

RestParam(4, 5, 6, 7, 8, 9, 2, 1, 3);
// Output
// a is 4
// b is 5
// c is 6,7,8,9,2,1,3

// function RestParam(a, ...b, c)
// ==> SyntaxError: Rest parameter must be last formal parameter

// ================= Question ==========
// Add all the argurment as much as we give

// const AddAll = (...number) => {
//     console.log("numbers =", number);
//     console.log(Array.isArray(number));
// };
const AddAll = (...number) => {
  let Total = 0;
  for (let num of number) {
    Total = Total + num;
  }
  return Total;
  //   console.log(Total);  //yaha se bhi total kr ke consol pe print kr sakte hai
};
sum = AddAll(1, 6, 3, 5, 10, 5);
console.log("Sum of all input Array= ", sum);
