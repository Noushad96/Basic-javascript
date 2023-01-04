// const introduced in ES6
//  const cannot be redeclared
// const  cannot be reassigned
// const have block scope

const Name = "rahul";
// let Name = "shaym";
console.log(Name);

{
  const Name = "sham";
  console.log("from block scope = ", Name);
}

console.log(Name);
