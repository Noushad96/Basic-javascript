// Object Inside Array
// very useful  in real world

// const arr =[{},{},{}] // syntax

const users = [
  { user_id: 1, Name: "ali", place: "delhi" },
  { user_id: 2, Name: "khali", place: "harya" },
  { user_id: 3, Name: "mahabali", place: "noida" },
];
console.log("object inside Array", users);

for (let user of users) {
  console.log("iterate array=", user);
}

for (let user of users) {
  console.log("iterate Array with user id = ", user.user_id);
  console.log("iterate array wth name = ", user.Name);
  //   console.log("iterate array with place = ",user.place);
}

// "nested Destructuring"

const [ar1, ar2, ar3] = users;
console.log("nested Destructuring", ar1);
console.log("nested Destructuring", ar2);
console.log("nested Destructuring", ar3);

const [{ user_id: ID, Name: myname1 }, { Name: myname }] = users;
console.log(ID);
console.log(myname1);
console.log(myname);
