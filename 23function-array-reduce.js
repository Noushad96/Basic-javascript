// important Array method   for function

// forEach()
// map()
// filter()
// reduce()

// ============= reduce() ============
// reduce() method =>  array ka hi method hai ye

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated(togather) result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const mynum = [1, 2, 3, 4, 5, 10];

const mysum = mynum.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0); // set initial value of accumulator=0
console.log("sum = ", mysum);

//  accumulator     currentvalue    return
// 0                  1              1
// 1                  2              3
// 3                  3              6
// 6                  4              10
// 10                 5              15
// 15                 10             25

// one more example

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "ac", price: 20000 },
  { productId: 4, productName: "tv", price: 15000 },
];

const TotalAmount = userCart.reduce((total, currentproduct) => {
  return total + currentproduct.price;
}, 0); //initial total=0

console.log("total bill using reduce() method=", TotalAmount);

let sum = 0;
for (let index = 0; index < userCart.length; index++) {
  sum += userCart[index].price;
}

console.log("total bill using for loop=", sum);

for (let x of userCart) {
  console.log(x.productName, "price=", x.price);
}
