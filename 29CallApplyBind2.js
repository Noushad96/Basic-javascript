// ============ apply() method ================

// apply and call dono hi same hai and kaam ek jaisa hi kte hai

// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

function about(hobby, favsinger) {
  // return this.name + this.age;
  console.log(this.name, this.age, hobby, favsinger);
}

const user1 = {
  name: "khali",
  age: 25,
  //   about: function (hobby, favsinger) {
  //     // return this.name + this.age;
  //     console.log(this.name, this.age, hobby, favsinger);
  //   },
};

const user2 = {
  name: "ali",
  age: 15,
};

// about.apply(user1, ["yoga", "king"]);
// about.apply(user2, ["yoga", "king"]);

// to access outer function using bind() method
// bind return krta ha ek function 
const myfunction1 = about.bind(user1, "football", "raftaar");
const myfunction2 = about.bind(user2, "cricket", "guru");

myfunction1();
myfunction2();
