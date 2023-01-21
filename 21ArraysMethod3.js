// clone the Array

let arr1 = ["apple", "mango", "grapes"];
// let arr2 = arr1; // address will be same and arr1 ka sara data arr2 me chala jayega [return=True]

// let arr2 = ["apple", "mango", "grapes"]; // bekar method

// using slice
// let arr2 = arr1.slice(0); // fast hai
// let arr2 = arr1.slice(0).concat(["guava", "PineApple"]);

// using concat
// let arr2 = [].concat(arr1);
// let arr2 =[.concat(arr1,["guava", "PineApple"])]

// using spread oprator
// let arr2 = [...arr1]; // this is best readability jyada hai iski
// let arr2 = [...arr1, "guava", "PineApple"];

let arr3 = ["orange", "walermelon"];
let arr2 = [...arr1, ...arr3];

arr1.push("banana");

console.log(arr1 === arr2); //return False dono alag hai or heap me memory bhi alag hai
console.log("array1=", arr1);
console.log("array2=", arr2);

console.log("dono array k liye, heap me alag memory allocate hogi");
