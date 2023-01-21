// while Loop in Array

// array k saath while kam use krte hai

const place = ["delhi", "indore", "agra"];

const place2 = [];

let i = 0;
while (i < place.length) {
  console.log("while in array=", place[i], i);
  console.log("while in array=", place[i].toUpperCase(), i);
  place2.push(place[i].toUpperCase());
  i++;
}
console.log("place2 me data ko store kro", place2);
