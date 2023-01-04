// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// Splice == splice() method adds new items to an array
// syntax
//  Element.splice(start-index,no.-of-element-to-delete,"elemnet to add deleted position")

let arr1 = ["apple", "mango", "grapes"];

arr1.splice(2, 0, "orange", "walermelon"); // 0 element deleted and orange and walermelon added

console.log("splice=", arr1);

console.log("splice delet se pehle array1 ka data=", arr1);
let arr4 = arr1.splice(0, 2);

console.log("splice use to delete bulk data=", arr4);
// Slice == slice() method slices out a piece of an array

let arr2 = arr1.slice(0, 2);
console.log("slice=", arr2);
