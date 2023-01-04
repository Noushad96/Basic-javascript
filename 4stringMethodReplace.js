// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// By default, the replace() method replaces only the first match:

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "youtube");

console.log(newText);
console.log("does not change the string it is called on.= ", text);
