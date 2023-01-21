// splice method  ye bhi array ka hi method hai
//  start,      delete,    insert

// =========== splice() method =========

// The splice() method adds and/or removes array elements.
// The splice() method [overwrites] the original array.

// Return Value
// An array containing the removed items (if any).

// Syntax
// array.splice(index, howmany, item1, ....., itemX)

// array k bich me se kuch delete krna ho ya insert krna ho

const myarray = ["item1", "item2", "item3", "item4", "item5", "item6"];

// delete
const delItem = myarray.splice(4, 1); //deleted [item5]
console.log("deleted Item = ", delItem); ///removed items only (if any)

// insert
const addItem = myarray.splice(2, 0, "inserted at index2");

console.log("original array = ", myarray);
