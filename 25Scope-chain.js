// Scope Chain:

// JavaScript engine uses scopes to find out the exact location or accessibility
//  of variables and that particular process is known as [Scope Chain].

// Scope Chain means that one variable has a scope(it may be global/local/block scope)
// is used by another variable or function having another scope(may be global/local/block scope).

// This complete chain formation goes on and stops when the user wishes
// to stop it according to the requirement

// Global variable
var global_variable = 20;

function main_function() {
  // Local Variable
  var local_variable = 30;

  var nested_function = function () {
    // Display the value inside the local variable
    console.log("accessing local variable = ", local_variable);
  };

  var another_nested_function = function () {
    // Displays the value inside the global variable
    console.log("accessing global variable = ", global_variable);
  };

  nested_function();
  another_nested_function();
}

main_function();
