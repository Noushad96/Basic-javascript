// Sets  (it is iterable)
// store data
// it has its own method
// no index based access
// order is not gauranted
// unique item only( no duplicate allowed )

// create a set

const myabc = new Set([1, 2, 1, 3, 4]);
console.log("set=", myabc, "type check=", typeof myabc);

// add
myabc.add(5);
myabc.add([6, 7, 8]);
console.log(myabc);
