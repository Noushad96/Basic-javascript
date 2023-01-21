// Hoisting   very important for interview

// Hoisting is JavaScript's default behavior of moving declarations(variable or function ) to the top

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

x = 5;
console.log(x);
// var x; //baad me declare kiya  fir bhi access krega
// let x; //Cannot access 'x' before initialization  (ReferenceError Error)
// const x; //Missing initializer in const declaration (ReferenceError Error)



// hoisting in function declaration me hoga

checkHoisting();

function checkHoisting() {
  console.log("hoisting with function declaration !");
}

// function expression case me  hoisting nhi hogi

checkHoistingExpression();

const checkHoistingExpression = () => {
  console.log(
    "hoisting with function expression= Cannot access 'checkHoistingExpression' before initialization(Error)"
  );
};

// let checkHoistingExpression = () => {
//   console.log(
//     "hoisting with function expression= Cannot access 'checkHoistingExpression' before initialization(Error)"
//   );
// };

// var checkHoistingExpression = () => {
//   console.log(
//     "hoisting with function expression= Cannot access 'checkHoistingExpression' before initialization(Error)"
//   );
// };
