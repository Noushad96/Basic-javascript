// Lexical Scoping defines how variable names are resolved in nested functions:
//  inner functions contain the scope of parent functions even
// if the parent function has returned.

// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the item got created.

// Another name for lexical scope is static scope

// important line hai yaaad kr lo
// ander wale function k bahar k scope ko lexical scope kehte hai

// Example

// const myVar = "dummyVariable myVar";

// const myVar = "dummyVariable myVar from in lexical scope of myfuncOut()";

function myfuncOut() {
  function myfuncInSide() {
    const myVar = "dummyVariable myVar from in lexical scope of myfuncConst()";
    const myfuncConst = () => {
      //   const myVar = "dummyVariable myVar from in local scope of myfuncConst()";
      console.log(
        "inside myfuncInSide() function called using myfuncConst() = ",
        myVar
      );
    };
    console.log("inner function called using myfuncInSide()");
    myfuncConst(); // myfuncConst function ko access krna
  }

  console.log("Outer Function called using ,myfuncOut()");
  myfuncInSide(); // myfuncInSide function ko yaha se access krna
}

myfuncOut(); // myfuncOut function ko yaha se access krna

// myfuncConst() function k bahar ka scope , lexical scope hai
// myfuncInSide() function k bahar ka scope ,lexical scope hai
// myfuncOut() function k bahar ka scope (global scope), lexical scope hai
