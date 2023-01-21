// ==================== closure =================

// A closure is a feature of JavaScript that allows~
// ~inner functions to access their outer scope.

// a closure gives you access to an outer function's scope from an inner function

// closures are created every time a function is created, at function creation time.

// Closure helps in binding a function to its outer boundary and ~
// ~is created automatically whenever a function is created.

// closures are useful as it helps to maintain the state between events.

function outerfunc() {
  var b = "accessed outer function";
  function inner() {
    return b;
  }
  return inner;
}
var get_func_inner = outerfunc();

console.log("access from inner function = ", get_func_inner());
console.log("access from inner function = ", get_func_inner());
console.log("access from inner function = ", get_func_inner());

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log("add(5+2) = ", add5(2)); // 7
console.log("add(10+2) = ", add10(2)); // 12

function fullname(firstName, lastName) {
  function innerfunc() {
    return firstName + " " + lastName;
  }
  return innerfunc;
}

const myans = fullname("ali", "ansari");
console.log(myans());
