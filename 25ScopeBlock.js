// Scope refers to the area where an item (such as a function or variable)
// is visible and accessible to other code.

// Scope determines the accessibility (visibility) of variables and function

// JavaScript has 3 types of scope:
// 1.Block scope        <=============================//introduced in ES6
// 2.Function(Local) scope
// 3.Global scope

// let and const are block scope

// =========== block scope =======
// {
//     block
// }
// Variables declared inside a { } block cannot be accessed from outside the block

{
  const x = "hello from block using const";
  console.log(x); // block se hi access hoga
}

{
  const x = "hello from block2 using const";
  console.log(x); // block se hi access hoga  == or ye dusra(1st block se different hai) block hai
}

//global scope
const tst = "hello from global scope using const";
console.log(tst);

// console.log(x); // ReferenceError: x is not defined ===== cannot access from outside the block

{
  let y = "hello from block using let";
  console.log(y);
}
// console.log(y); //ReferenceError: y is not defined ====== cannot access from outside the block

// ===================  block scope with var ===========
// var is local(function ) scope
// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
//  var kahi se bhi access kr skte hai

{
  var named = " variable(var) access from block ";
  console.log(named);
}
console.log("access from outside of block =", named);

