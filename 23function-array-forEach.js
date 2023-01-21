// important Array method   for function

// forEach()
// map()
// filter()
// reduce()

// =========== foreach =============
// forEach() method =>  array ka hi method hai ye

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
//  forEach() is like a loop to understand
// does not give an Array

// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)

// Return Value
// undefined

const mynum = [2, 4, 6, 8];

function multibynum(num, index) {
  //   console.log("number = ", num);
  //   console.log("index =", index);
  console.log(`At index ${index} and value is ${num} so ${num}*2=${num * 2}`);
}

// 3st way  forEach()
// 1st argument=value and 2nd argument=index
mynum.forEach(multibynum);

// 1st way

// multibynum(mynum[0], 0);
// multibynum(mynum[1], 1);
// multibynum(mynum[2], 2);

// 2st way for loop
// for (let i = 0; i < mynum.length; i++) {
//   //   console.log("index =", i, "value =", mynum[i]);
//   multibynum(mynum[i], i);
// }

// anonymous function use kr k
mynum.forEach(function (numvalue, indexArray) {
  console.log(
    `At index ${indexArray} and value is ${numvalue} so ${numvalue}*2=${
      numvalue * 2
    }`
  );
});

// index naa do fir bhi chalega
// index ko ignore bhi kr sakte hai

mynum.forEach(function (numvalue) {
  console.log(`${numvalue}*2 = ${numvalue * 2}`);
});

// one for example

const user = [
  { firstName: "ram", add: "agra" },
  { firstName: "shyam", add: "mathura" },
  { firstName: "ghanshyam", add: "deoria" },
  { firstName: "ramdev", add: "delhi" },
];

// argument dena jaruri hai
// forEach pehle se hai js me
user.forEach(function (myuser) {
  console.log("name=", myuser.firstName, ",", "Address =", myuser.add);
});

// same output for both the code
// for of loop abhi aya hai
for (let myuser of user) {
  console.log("name=", myuser.firstName, ",", "Address =", myuser.add);
}
