// Call Apply Bind Method

function myfunc() {
  console.log("invoked function");
}
myfunc();
myfunc.call(); //just to call function

// ============= call()method ============
// call() method, you can write a method that can be used on different objects
// It can be used to invoke (call) a method with an owner object as an argument (parameter)

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

// user1.about("yoga", "king"); // khali 25
// user1.about.call(user1, "yoga", "king"); // khali 25
// user1.about.call(user2, "yoga", "king"); //ali 15
// user1.about.call(); //undefined

// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// to access outer function using call() method
// about.call(user1, "yoga", "king");
// about.call(user2, "yoga", "king");

// // to access outer function using apply() method
// about.apply(user1, ["yoga", "king"]);
// about.apply(user2, ["yoga", "king"]);

// to access outer function using bind() method
const myfunction1 = about.bind(user1, ["yoga", "king"]);
const myfunction2 = about.bind(user2, ["yoga", "king"]);

myfunction1();
